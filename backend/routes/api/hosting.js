const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Listing, Image, ListingAmenity, Amenity  } = require('../../db/models');


const router = express.Router();

router.get(
    '/:userId',
    asyncHandler(async (req, res) => {
        const { userId } = req.params;
        const listings = await Listing.findAll({
            where: {userId},
            include: [Image, ListingAmenity
                // Error below: amenity is not associated with ListingAmenity
                // {
                // model: ListingAmenity,
                // include: [Amenity]}
            ],
            order: [["createdAt", "DESC"]],
        });
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

        return res.json({
            listings,
        });
    }),
);

module.exports = router;