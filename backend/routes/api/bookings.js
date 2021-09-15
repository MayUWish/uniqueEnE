const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Listing, Image, ListingAmenity } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


const validateBooking = [
    check('startDate')
        .exists({ checkFalsy: true })
        .withMessage('Start Date cannot be blank.'),
    check('startDate')
        .exists({ checkFalsy: true })
        .withMessage('End Date cannot be blank.'),    
    check('numGuests')
        .exists({ checkFalsy: true })
        .withMessage('Number of Guests cannot be blank.'),
    handleValidationErrors,
];

// create bookings, require user to log-in;
router.post(
    '/',
    validateBooking,
    requireAuth,
    asyncHandler(async (req, res,next) => {
        let { startDate, endDate, userId, listingId, numGuests } = req.body;
        // eliminate hour minute second ms.
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);
        
        const user = await User.findByPk(userId);
        const listing = await Listing.findByPk(listingId);

        // to check if booking date has conflict with existing bookings
        const existingBookings = await Booking.findAll({where:{listingId}});
        let isDateConflicted = existingBookings.some(booking => (booking.startDate.setHours(0, 0, 0, 0) <= startDate && booking.endDate.setHours(0, 0, 0, 0) >= startDate) || (booking.startDate.setHours(0, 0, 0, 0) <= endDate && booking.endDate.setHours(0, 0, 0, 0) >= endDate))

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

        } else if (endDate <= startDate){
            // check endDate more than startDate

            const err = Error('Bad request.');
            err.errors = [`End Date must be more than start date.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        }

        else{

            const booking = await Booking.create({ startDate, endDate, userId, listingId, numGuests });
            return res.json({
                booking,
            });

        }

        
    }),
);

module.exports = router;