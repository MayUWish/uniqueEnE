const express = require('express');
const router = express.Router();

const apiRouter = require('./api');
router.use('/api', apiRouter);

// !!test route for scurf token， NEED TO BE CHANGED OR DELETED 
router.get('/hello/world', function (req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World!');
});

module.exports = router;