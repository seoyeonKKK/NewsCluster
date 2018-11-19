// 네이버 검색 Open API 예제 - 뉴스 단어 검색
const express = require('express');
const async = require('async');
const router = express.Router();
var client_id = 'WdFUluGwZ0iHgtqXMMEb';
var client_secret = 'fL1iLHNjRo';
router.get('/', async (req, res, next) => {
  //  var api_url = 'https://openapi.naver.com/v1/search/news.xml?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&sort=sim'; // json 결과
  var api_url = 'https://openapi.naver.com/v1/search/news?query=' + encodeURI(req.query.query) + '&display=10&start=1&sort=sim'; // xml 결과
  var request = require('request');
  var options = {
      url: api_url,
      headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      res.end(body);
      console.log('success connection 200'); 
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});
module.exports = router;