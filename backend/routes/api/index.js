const router = require('express').Router();

// !!test route， NEED TO BE CHANGED OR DELETED 
router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

module.exports = router;



