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

// create bookings
router.post(
    '/',
    validateBooking,
    requireAuth,
    asyncHandler(async (req, res) => {
        const booking = await Booking.create({ ...req.body });
        return res.json({
            booking,
        });
    }),
);

module.exports = router;