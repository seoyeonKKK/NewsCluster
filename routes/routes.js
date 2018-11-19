/*
 Default module
*/
const express = require('express');
const router = express.Router();

router.use('/news', require('./news/news_routes'));

module.exports = router;
