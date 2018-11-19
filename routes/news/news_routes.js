/*
 Default module
*/
const express = require('express');
const router = express.Router();

 router.use('/news_api', require('./news_api'));

module.exports = router;
