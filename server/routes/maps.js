/* jshint node:true, strict:false */
var request = require('request'),
          _ = require('underscore'),
      couch = require('config').couch;

var url = 'http://' + couch.host + ':' + couch.port + '/' + couch.db.maps;

module.exports = function (app) {
  app.get('/maps', getMaps);
  app.get('/map/:id', getMapFromId);
  app.post('/map', saveMap);
  app.put('/map', updateMap);
};

function getMaps(req, res) {
  request(url + '/_all_docs?include_docs=true',
    function (err, resp, body) {
      var arr = [];
      body = JSON.parse(body);
      _.each(body.rows, function (doc) {
        arr.push({
          _id: doc.id,
          name: doc.doc.title
        });
      });
      res.send(arr);
    }
  );
}

function getMapFromId(req, res) {
  var id = req.params.id;

  request(url + '/' + id,
    function (err, resp, body) {
      res.send(body);
    }
  );
}

function saveMap(req, res) {
  var map = req.body;

  request.post({
    url: url,
    json: map
  }, function (err, resp, body) {
      res.send(body);
    }
  );
}

function updateMap(req, res) {
  var map = req.body;

  request(url + '/' + map._id,
    function (err, resp, body) {
      body = JSON.parse(body);
      map._rev = body._rev;

      request.put({
        url: url + '/' + map._id,
        json: map
      }, function (err, resp, body) {
        res.send(body);
      });
    }
  );
}
