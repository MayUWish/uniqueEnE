const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User,Listing } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


const validateCreateListing = [
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Username cannot be blank.')
        .isLength({ min: 6 })
        .withMessage('Please provide a username with at least 6 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Email cannot be blank.')
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Password cannot be blank.')
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
];

router.post(
    '/',
    // validateCreateListing,
    asyncHandler(async (req, res) => {
        const listing = await Listing.create({ ...req.body});
        return res.json({
            listing,
        });
    }),
);

module.exports = router;