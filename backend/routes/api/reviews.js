const express = require('express');
const asyncHandler = require('express-async-handler');
const { Op } = require("sequelize");
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Listing, Image, ListingAmenity, Booking,Review } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { default: Reviews } = require('../../../frontend/src/components/PublicListing/Reviews');

const router = express.Router();


const validateReview = [
    check('rating')
        .exists({ checkFalsy: true })
        .withMessage('Rating cannot be blank.'),
    check('review')
        .exists({ checkFalsy: true })
        .withMessage('Review Content cannot be blank.'),
    handleValidationErrors,
];


router.post(
    '/',
    validateReview,
    requireAuth,
    asyncHandler(async (req, res, next) => {
        let { userId, listingId, rating, review } = req.body;
        const today = (new Date()).setHours(0,0,0,0);
        const user = await User.findByPk(userId);
        const listing = await Listing.findByPk(listingId);
        let bookings = await Booking.findAll({
            where:{
                listingId,
                userId,
                // endDate:{
                //     [Op.gt]: today
                // }
            }});
        
            // filter out the bookings that has started
        bookings = bookings.filter(booking=>booking.startDate - today<=0)

        // to check if the user has booked the listing before
        const isBooked = (bookings.length>0)

    
        if (+req.user.id !== +userId) {
            //logged-in userId is different from review userId, which means review for others
            const err = Error('Bad request.');
            err.errors = [`You cannot create a review for other users.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        }
        else if (!listing) {
            // no such listing
            const err = Error('Bad request.');
            err.errors = [`The listing does not exist.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        }
        else if (!user) {
            // no such user
            const err = Error('Bad request.');
            err.errors = [`The user/account does not exist.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        }
        else if (+userId === +listing.userId) {
            // userId cannot be listing's host
            const err = Error('Bad request.');
            err.errors = [`Please do not review your own listing.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);
        } else if (!isBooked) {
            // to check if the user books the listing before
    
            const err = Error('Bad request.');
            err.errors = [`You cannot review a listing without a reservation that has started.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        } 

        
        else if (!Number.isInteger(+rating) || rating < 1 || rating > 5) {
            const err = Error('Bad request.');
            err.errors = [`Rating must be an integer, from 1 to 5.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        }

        else {

            let review = await Review.create({ ...req.body });
            review = await Review.findByPk(review.id, {include:User})
            
            return res.json({
                review
            });

        }


    }),
);

// delete your own reviews
router.delete(
    '/:id(\\d+)',
    requireAuth,
    asyncHandler(async (req, res, next) => {
        const reviewId = req.params.id;

        const review = await Review.findByPk(reviewId);
   
        // if loggin user is the user of review and if the review exists
        if (+req.user.id !== +review.userId) {

            const err = Error('Unauthorized.');
            err.errors = [`You have no authorization to delete this review`];
            err.status = 401;
            err.title = 'Unauthorized.';
            next(err);


        } else if (!review) {
            const err = Error('Bad request.');
            err.errors = [`The review does not exist.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);
        }
     

        else if (+req.user.id === +review.userId && review) {           
            await review.destroy()

            return res.json({
                reviewId
            })

        }
        ;
    }),
);


router.edit(
    '//:id(\\d+)',
    validateReview,
    requireAuth,
    asyncHandler(async (req, res, next) => {
        const reviewId = req.params.id;
        let { userId, listingId, rating, review } = req.body;
        const review = await Reviews.findByPk(reviewId);
        


        if (+req.user.id !== +userId || +req.user.id !== +review .userId) {
            //logged-in userId is different from review userId, which means review for others
            const err = Error('Bad request.');
            err.errors = [`You cannot edit a review for other users.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        }

        else if (+listingId !== +review.listingId) {
            //logged-in userId is different from review userId, which means review for others
            const err = Error('Bad request.');
            err.errors = [`You cannot change which listing the review belongs to.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        }
   
        else if (!Number.isInteger(+rating) || rating < 1 || rating > 5) {
            const err = Error('Bad request.');
            err.errors = [`Rating must be an integer, from 1 to 5.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        }

        else {

            await review.update({ ...req.body });

            return res.json({
                review
            });

        }


    }),
);

module.exports = router;