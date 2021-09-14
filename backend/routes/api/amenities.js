const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Listing, ListingAmenity } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


const validateCreateAmenity = [
    check('amenityId')
        .exists({ checkFalsy: true })
        .withMessage('Amenity cannot be blank.'),
   
    handleValidationErrors,
];

// create amenities
router.post(
    '/',
    validateCreateAmenity,
    requireAuth,
    asyncHandler(async (req, res, next) => {
        const {listingId,amenityId}=req.body;
        const listing = await Listing.findByPk(listingId, { include: User });

        const exitingAmenityIds = await ListingAmenity.findAll({
            where:{listingId}
        }).map(joinItem=>joinItem.amenityId)
        // console.log('exitingAmenityIds', exitingAmenityIds, typeof exitingAmenityIds)
        // console.log('amenityId', amenityId, typeof amenityId)

        // check duplication adding
        if (exitingAmenityIds.includes(amenityId)) {
            const err = Error('Bad request.');
            err.errors = [`Amenity #${amenityId} has beed added. No duplicated input is allowed.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);
        } else if (+req.user.id !== +listing.User.id){
            const err = Error('Unauthorized.');
            err.errors = [`You have no authorization to see the listings.`];
            err.status = 401;
            err.title = 'Unauthorized.';
            next(err);

        }
        
        else{

            const amenity = await ListingAmenity.create({ ...req.body });
            return res.json({
                amenity,
            });

        }
        
    }),
);




module.exports = router;