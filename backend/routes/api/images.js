const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Listing, Image } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


const validateCreateImage = [
    check('url')
        .exists({ checkFalsy: true })
        .withMessage('Image Url cannot be blank.'),
   
    handleValidationErrors,
];

// create listings
router.post(
    '/',
    validateCreateImage,
    asyncHandler(async (req, res) => {
        const image = await Image.create({ ...req.body });
        return res.json({
            image,
        });
    }),
);




module.exports = router;