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
    asyncHandler(async (req, res) => {
        const amenity = await ListingAmenity.create({ ...req.body });
        return res.json({
            amenity,
        });
    }),
);




module.exports = router;