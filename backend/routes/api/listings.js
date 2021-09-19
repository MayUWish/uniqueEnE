const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Listing, Image,ListingAmenity,Booking, Review } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


const validateCreateListing = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Title cannot be blank.')
        .isLength({ max: 100 })
        .withMessage('Title cannot be more than 100 characters.'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Description cannot be blank.'),
    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Address cannot be blank.')
        .isLength({ max: 200 })
        .withMessage('Address cannot be more than 200 characters.'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('City cannot be blank.')
        .isLength({ max: 70 })
        .withMessage('City cannot be more than 70 characters.'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('State cannot be blank.')
        .isLength({ max: 70 })
        .withMessage('State cannot be more than 70 characters.'),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage('Country cannot be blank.')
        .isLength({ max: 100 })
        .withMessage('Country cannot be more than 100 characters.'),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage('Price cannot be blank.')
        .isFloat({ min: 0})
        .withMessage('Price cannot be negative.'),
    check('guestNum')
        .exists({ checkFalsy: true })
        .withMessage('Number of guest cannot be blank.')
        .isFloat({ min: 1 })
        .withMessage('Number of guest cannot be less than 1.'),
    check('bedroomNum')
        .exists()
        .withMessage('Number of bedroom cannot be blank.')
        .isInt()
        .withMessage('Number of bedroom must be an integer.')
        .isFloat({ min: 0 })
        .withMessage('Number of bedroom cannot be negative.'),
    check('bathroomNum')
        .exists()
        .withMessage('Number of bathroom cannot be blank.')
        .isInt()
        .withMessage('Number of bathroom must be an integer.')
        .isFloat({ min: 0 })
        .withMessage('Number of bathroom cannot be negative.'),
    check('twinBedNum')
        .exists()
        .withMessage('Number of twin bed cannot be blank.')
        .isInt()
        .withMessage('Number of twin bed must be an integer.')
        .isFloat({ min: 0 })
        .withMessage('Number of twin bed cannot be negative.'),
    check('queenBedNum')
        .exists()
        .withMessage('Number of queen bed cannot be blank.')
        .isInt()
        .withMessage('Number of queen bed must be an integer.')
        .isFloat({ min: 0 })
        .withMessage('Number of queen bed cannot be negative.'),
    check('kingBedNum')
        .exists()
        .withMessage('Number of king bed cannot be blank.')
        .isInt()
        .withMessage('Number of king bed must be an integer.')
        .isFloat({ min: 0 })
        .withMessage('Number of king bed cannot be negative.'),
    check('sofaBedNum')
        .exists()
        .withMessage('Number of sofa bed cannot be blank.')
        .isInt()
        .withMessage('Number of sofa bed must be an integer.')
        .isFloat({ min: 0 })
        .withMessage('Number of sofa bed cannot be negative.'),
    
    check('enhancedClean')
        .exists({ checkFalsy: true })
        .withMessage('Enhanced Clean cannot be blank.')
        .isIn(['true', 'false'])
        .withMessage('Enhanced Clean can only be true or false.'),

    check('selfCheckin')
        .exists({ checkFalsy: true })
        .withMessage('Self Checkin cannot be blank.')
        .isIn(['true', 'false'])
        .withMessage('Self Checkin can only be true or false.'),
  
  
    handleValidationErrors,
];

// create listings
router.post(
    '/',
    validateCreateListing,
    requireAuth,
    asyncHandler(async (req, res) => {
        const listing = await Listing.create({ ...req.body});
        return res.json({
            listing,
        });
    }),
);


// edit listings
router.put(
    '/:id(\\d+)',
    validateCreateListing,
    requireAuth,
    asyncHandler(async (req, res, next) => {
        const listingId = req.params.id;
        const listing = await Listing.findByPk(listingId, { include: User });
        
        // if loggin user is the host of listing and if the listing exists
        if (+req.user.id !== +listing.User.id) {

            const err = Error('Unauthorized.');
            err.errors = [`You have no authorization to edit the question`];
            err.status = 401;
            err.title = 'Unauthorized.';
            next(err);


        } else if (!listing){
            const err = Error('Bad request.');
            err.errors = [`The listing does not exist.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);
        }
        else if (+req.user.id===+listing.User.id && listing){
            // delete id and ensure userId does not change!
            const body = Object.assign({}, req.body);
            // console.log('before',body)
            delete body.id;
            body.userId = listing.User.id;
            // console.log('after', body, req.body)
            await listing.update({ ...body })
            return res.json({
                listing,
            })

        } 
        ;
    }),
);


// !!Need to check booking to see the availability of delete listings
//delete listings
router.delete(
    '/:id(\\d+)',
    requireAuth,
    asyncHandler(async (req, res, next) => {
        const listingId = req.params.id;
        const listing = await Listing.findByPk(listingId, { include: User });

        const existingBookings = await Booking.findAll({
            where: {
                listingId,

            }
        });
       
        // to check if there is booking' endDate today or in the 
        hasBookingsAsOfToday=existingBookings.some(booking=>booking.endDate - (new Date()).setHours(0,0,0,0) >= 0)

        // if loggin user is the host of listing and if the listing exists
        if (+req.user.id !== +listing.User.id) {

            const err = Error('Unauthorized.');
            err.errors = [`You have no authorization to edit the question`];
            err.status = 401;
            err.title = 'Unauthorized.';
            next(err);


        } else if (!listing) {
            const err = Error('Bad request.');
            err.errors = [`The listing does not exist.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);
        }
        else if (hasBookingsAsOfToday) {
            const err = Error('Bad request.');
            err.errors = [`You can't delete the listing has current and/or incoming reservations. Please contact your guests to cancel the incoming reservations and wait for the current reservation to be completed.'`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);
        }

        else if (+req.user.id === +listing.User.id && listing) {
            const listingId=listing.id;
            await listing.destroy();
            return res.json({
                listingId
            })

        }
        ;
    }),
);


// view specific listing for logged-in and logged-out users,but only logged-in user can book and reviews(in other api route)

router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        // console.log('~~~~~~~~~~~~~!!!!!!!!!111111111!!!!!!')
        const listingId  = req.params.id;
        // console.log('!!!!!!!!!111111111!!!!!!',listingId)
        const listing = await Listing.findOne({
            where: {id:listingId},
            include: [ListingAmenity,Image, User,Review]
            });
        // console.log('!!!!!!!!!111111111!!!!!!', listing)
        
        return res.json({
            listing,
        });
    }),
);


// get all listings for both logged-in and logged-out users
router.get(
    '/',
    asyncHandler(async (req, res, next) => {
    
        
            const listings = await Listing.findAll({
                include: [ListingAmenity, Image, Review
                    // Error below: amenity is not associated with ListingAmenity
                    // {
                    // model: ListingAmenity,
                    // include: [Amenity]}
                ],
                order: [["createdAt", "DESC"]],
            });
            // no ListingAmenities id, but image has id
            return res.json({
                listings,
            });
    }),
);

module.exports = router;