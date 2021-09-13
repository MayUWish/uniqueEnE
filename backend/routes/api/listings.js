const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User,Listing } = require('../../db/models');
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

router.post(
    '/',
    validateCreateListing,
    asyncHandler(async (req, res) => {
        const listing = await Listing.create({ ...req.body});
        return res.json({
            listing,
        });
    }),
);

module.exports = router;