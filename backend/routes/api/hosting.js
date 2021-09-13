const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Listing } = require('../../db/models');


const router = express.Router();

router.get(
    '/:userId',
    asyncHandler(async (req, res) => {
        const { userId } = req.params;
        const listings = await Listing.findAll({
            where: {
                userId
            }
        });
        return res.json({
            listings,
        });
    }),
);

module.exports = router;