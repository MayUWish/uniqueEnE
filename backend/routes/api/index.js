const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth  } = require('../../utils/auth.js');
const { User } = require('../../db/models');


const router = require('express').Router();

// !!test route， NEED TO BE CHANGED OR DELETED 
router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

// !!test route， NEED TO BE CHANGED OR DELETED 
router.get('/set-token-cookie', asyncHandler(async (req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        },
    })
    setTokenCookie(res, user);
    return res.json({ user });
}));

// !!test route， NEED TO BE CHANGED OR DELETED 
router.get(
    '/restore-user',
    restoreUser,
    (req, res) => {
        return res.json(req.user);
    }
);

// !!test route， NEED TO BE CHANGED OR DELETED 
router.get(
    '/require-auth',
    requireAuth,
    (req, res) => {
        return res.json(req.user);
    }
);


module.exports = router;



