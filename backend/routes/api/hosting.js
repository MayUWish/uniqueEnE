const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Listing, Image, ListingAmenity, Amenity  } = require('../../db/models');
const { setTokenCookie, requireAuth } = require('../../utils/auth');


const router = express.Router();

// get all listings that the current loggind user posted.
router.get(
    '/:userId(\\d+)',
    requireAuth,
    asyncHandler(async (req, res, next) => {
        const { userId } = req.params;
        // if userId is the currentloggin userId
        if (req.user.id === userId){
            const listings = await Listing.findAll({
                where: { userId },
                include: [Image, ListingAmenity
                    // Error below: amenity is not associated with ListingAmenity
                    // {
                    // model: ListingAmenity,
                    // include: [Amenity]}
                ],
                order: [["createdAt", "DESC"]],
            });

            return res.json({
                listings,
            });

        } else{
            const err = Error('Unauthorized.');
            err.errors = [`You have no authorization to see the listings`];
            err.status = 400;
            err.title = 'Unauthorized.';
            next(err);
        } 
       
        // The following does not work bc of await, need to use findAll association as above;
        // listings.forEach(listing=>{
        //     const images =await Image.findAll({
        //         where:{listingId:listing.id}
        //     })

        //     const amenityIds = await ListingAmenity.findAll({
        //         where: { listingId: listing.id }
        //     }).map(joinItem => joinItem.amenityId);

        //     const amenities = await Amenity.findAll({
        //         where:{id:amenityId}
        //     })

        //     listing.images = images;
        //     listing.amenities=amenities;
        // })

        
    }),
);

module.exports = router;