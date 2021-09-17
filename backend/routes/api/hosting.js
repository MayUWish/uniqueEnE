const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Listing, Image, ListingAmenity, Amenity,Booking  } = require('../../db/models');



const router = express.Router();

// get all listings that the current loggind user posted.
router.get(
    '/:userId(\\d+)',
    requireAuth,
    asyncHandler(async (req, res, next) => {
        const { userId } = req.params;
        // if userId is the currentloggin userId
        if (req.user.id === +userId){
            const listings = await Listing.findAll({
                where: { userId },
                include: [{model:ListingAmenity,
                    attributes: ['id', 'listingId', 'amenityId', 'createdAt', 'updatedAt']},                  
                    Image,
                    {model:Booking,
                    include:[User]}
                    // Error below: amenity is not associated with ListingAmenity because join table ListingAmenity does not build association yet. If you would like to use the association, you would need to build it > see booking model as an example
                    // {
                    // model: ListingAmenity,
                    // include: [Amenity]}
                ],
                order: [["createdAt", "DESC"]],
            });           
            // no ListingAmenities id, but image has id
            // console.log('!!!ListingAmenities', listings[0].ListingAmenities[0])
            // console.log('!!!Images', listings[0].Images[0])
            return res.json({
                listings,
            });

        } else{
            const err = Error('Unauthorized.');
            err.errors = [`You have no authorization to see the listings.`];
            err.status = 401;
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