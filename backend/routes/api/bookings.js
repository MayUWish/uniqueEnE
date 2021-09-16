const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Listing, Image, ListingAmenity, Booking } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


const validateBooking = [
    check('startDate')
        .exists({ checkFalsy: true })
        .withMessage('Start Date cannot be blank.'),
    check('endDate')
        .exists({ checkFalsy: true })
        .withMessage('End Date cannot be blank.'),    
    check('numGuests')
        .exists({ checkFalsy: true })
        .withMessage('Number of Guests cannot be blank.'),
    handleValidationErrors,
];

// frontend input: e.g. startDate: "2021-09-15"
const toDate = (yearMonthDay)=>{
    const year = yearMonthDay.split('-')[0];
    const month = yearMonthDay.split('-')[1];
    const day = yearMonthDay.split('-')[2];

    //new Date take month -1 as month
    const date = new Date(year,month-1,day);
    return date;

}

// create bookings, require user to log-in;
router.post(
    '/',
    validateBooking,
    requireAuth,
    asyncHandler(async (req, res,next) => {
        let { startDate, endDate, userId, listingId, numGuests } = req.body;
        // req data as "2021-09-15", turn it into date, to save to db(no hour,minute,second,ms) and to compare date for validation;
        startDate = toDate(startDate);
        endDate = toDate(endDate);
        
        const user = await User.findByPk(userId);
        const listing = await Listing.findByPk(listingId);

        // to check if booking date has conflict with existing bookings
        const existingBookings = await Booking.findAll({where:{listingId}});
        
        // a = new Date(2021,10,9),b = new Date(2021,10,9); but a === b is false; thus using a-b ===0 to check if same day;
        let isDateConflicted = existingBookings.some(booking => (booking.startDate - startDate <= 0 && booking.endDate - startDate > 0) || (booking.startDate - endDate < 0 && booking.endDate - endDate >= 0))

        //array of array [startDate,endDate]
        const existingBookingDates = existingBookings.map(booking=>[booking.startDate,booking.endDate]);
        
        if (+req.user.id !== +userId){
            //logged-in userId is different from booking userId, which means book for others
            const err = Error('Bad request.');
            err.errors = [`You cannot book for other users.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        }
        else if(!listing){
            // no such listing
            const err = Error('Bad request.');
            err.errors = [`The listing does not exist.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        }
        else if (!user ) {
            // no such user
            const err = Error('Bad request.');
            err.errors = [`The user/account does not exist.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        }
        else if(+user.id===+listing.userId){
            // userId cannot be host's userId
            const err = Error('Bad request.');
            err.errors = [`Please do not book your own listing.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);
        } else if (isDateConflicted){
            // to check if booking date has conflict with existing bookings
            const message = existingBookingDates.map(date => `${date[0].toLocaleDateString()} - ${date[1].toLocaleDateString()}`)
            const err = Error('Bad request.');
            err.errors = [`Conflicts with the following date range of existing bookings.`,...message];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        } else if (endDate - startDate <= 0 ){
            // check endDate more than startDate, and both must be greated than today;

            const err = Error('Bad request.');
            err.errors = [`Check in date should be be early than check out date.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        } else if (startDate - (new Date()).setHours(0, 0, 0, 0) < 0 || endDate - (new Date()).setHours(0, 0, 0, 0) < 0){
            const err = Error('Bad request.');
            err.errors = [`Booking dates should be today or in the future.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);


        }
        
        else if (!Number.isInteger(+numGuests)||numGuests < 1 || numGuests > listing.guestNum){
            const err = Error('Bad request.');
            err.errors = [`Number of guests must be an integer and from 1 to its max capacity.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        }

        else{

            const booking = await Booking.create({ startDate, endDate, userId, listingId, numGuests });
            // console.log('!!!',booking)
            return res.json({
                booking,
            });

        }

        
    }),
);


// get all bookings that the current loggind user reserved. 
router.get(
    '/:userId(\\d+)',
    requireAuth,
    asyncHandler(async (req, res, next) => {
        const { userId } = req.params;
        const today = (new Date()).setHours(0,0,0,0)
        // if userId is the currentloggin userId
        if (req.user.id === +userId) {
            const bookings = await Booking.findAll({
                where: { userId },
                attributes: ['id','listingId','userId','startDate','endDate','createdAt','updatedAt','numGuests'],
                include: {
                    model: Listing,
                    // include: [Image]
                },
                order: [["startDate"]],
            });

            const incomingBookings = bookings.filter(booking=>(booking.endDate-today>=0))


            const pastBookings = bookings.filter(booking => booking.endDate - today < 0)
        
            // console.log('incomingBookings!!!!!!!!!!!!!!!!!!!!!!', incomingBookings)
            // console.log('pastBookings!!!!!!!!!!!!!!!!!!!!!!', pastBookings)
            return res.json({
                incomingBookings,
                pastBookings,
            });

        } else {
            const err = Error('Unauthorized.');
            err.errors = [`You have no authorization to see the bookings.`];
            err.status = 401;
            err.title = 'Unauthorized.';
            next(err);
        }

      
    }),
);

//delete bookings
router.delete(
    '/:id(\\d+)',
    requireAuth,
    asyncHandler(async (req, res, next) => {
        const bookingId = req.params.id;
        const booking = await Booking.findByPk(bookingId, { include: Listing });

        // if loggin user is the user of booking and if the booking exists
        if (+req.user.id !== +booking.userId) {

            const err = Error('Unauthorized.');
            err.errors = [`You have no authorization to cancel the reservation`];
            err.status = 401;
            err.title = 'Unauthorized.';
            next(err);


        } else if (!booking) {
            const err = Error('Bad request.');
            err.errors = [`The booking does not exist.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);
        }
        else if (+req.user.id === +booking.userId && booking) {
            const bookingId = booking.id;
            await booking.destroy();
            return res.json({
                bookingId
            }) 

        }
        ;
    }),
);

module.exports = router;