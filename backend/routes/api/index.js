const router = require('express').Router();

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const listingsRouter = require('./listings.js');
const hostingRouter = require('./hosting.js');

const imagesRouter = require('./images.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/listings', listingsRouter);

// to get loggin user 's listing that he/she posted as host.
router.use('/hosting', hostingRouter );


router.use('/images', imagesRouter);










module.exports = router;



