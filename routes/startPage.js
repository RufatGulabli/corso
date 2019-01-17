const express = require('express');
const router = express();

router.get('/', (req, res, next) => {
    res.send("Home Page");
});

module.exports = router;