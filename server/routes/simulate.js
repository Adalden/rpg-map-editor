/* jshint node:true, strict:false */
var request = require('request'),
    gameUrl = require('config').gameUrl,
      token = require('config').token;

module.exports = function (app) {
  app.post('/sendMap', sendMap);
};

function sendMap(req, res) {
  var map = req.body;

  request({
    url: gameUrl + token,
    method: 'POST',
    json: map
  }, function (err, resp, body) {
    if (err) {
      console.error(err);
      res.send({
        success: false,
        err: err
      });
      return;
    }

    if (!body.success) {
      console.error();
      res.send({
        success: false,
        err: body.err
      });
      return;
    }

    res.send(body);
  });
}
