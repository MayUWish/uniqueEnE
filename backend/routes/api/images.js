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

// create images to listing
router.post(
    '/',
    validateCreateImage,
    requireAuth,
    asyncHandler(async (req, res) => {
        const { listingId} = req.body;
        const listing = await Listing.findByPk(listingId, { include: User });
        if (+req.user.id !== +listing.User.id){
            const err = Error('Unauthorized.');
            err.errors = [`You have no authorization to see the listings.`];
            err.status = 401;
            err.title = 'Unauthorized.';
            next(err);

        } else{
            const image = await Image.create({ ...req.body });
            return res.json({
                image,
            });

        }
       
    }),
);

//delete images
router.delete(
    '/:id(\\d+)',
    requireAuth,
    asyncHandler(async (req, res, next) => {
        const imageId = req.params.id;
        const image = await Image.findByPk(imageId, {
            include: Listing
              });
        // console.log('!!!!!!!!!!!!image.Listing',image.Listing.id)

        // if loggin user is the host of listing and if the image exists
        if (+req.user.id !== +image.Listing.userId) {

            const err = Error('Unauthorized.');
            err.errors = [`You have no authorization to delete the image`];
            err.status = 401;
            err.title = 'Unauthorized.';
            next(err);


        } else if (!image) {
            const err = Error('Bad request.');
            err.errors = [`The image does not exist.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);
        }
        else if (+req.user.id === +image.Listing.userId && image) {
            const listingId = image.Listing.id;
            await image.destroy();
            // console.log('!!!!!!',listingId)
            return res.json({
                imageId,
                listingId
            })

        }
        ;
    }),
);



module.exports = router;