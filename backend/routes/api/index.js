const router = require('express').Router();

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const listingsRouter = require('./listings.js');
const hostingRouter = require('./hosting.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/listings', listingsRouter);

// to get loggin user 's listing that he/she posted as host.
router.use('/hosting', hostingRouter );










module.exports = router;



