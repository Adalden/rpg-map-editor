/* jshint node:true, strict:false */
var request = require('request'),
       hash = require('password-hash'),
      couch = require('config').couch;

var url = 'http://' + couch.host + ':' + couch.port + '/' + couch.db.users;

module.exports = function (app) {
  app.post('/login', login);
  app.post('/logout', logout);
  app.post('/signup', signup);
  app.post('/userExists', userExists);
};

function login(req, res) {
  var user = req.body.user;
  var pass = req.body.pass;

  if (!user || !pass) {
    return fail(res, 'You must post a username and password');
  }

  getCouchUser(user, function (userObj) {
    if (!userObj) {
      return fail(res, 'User does not exist');
    }

    finish(userObj.value);
  });

  function finish(userObj) {
    var hashed = 'sha1$' + userObj.salt + '$1$' + userObj.pass;
    var verified = hash.verify(pass, hashed);

    if (!verified) {
      return fail(res, 'Incorrect password');
    }

    req.session.user = userObj;
    res.send({
      success: true,
      user: userObj
    });
  }
}

function logout(req, res) {
  req.session.destroy();
  res.end('ok');
}

function signup(req, res) {
  var user = req.body.user;
  var pass = req.body.pass;

  if (!user || !pass) {
    return fail(res, 'You must post a username and password');
  }

  getCouchUser(user, function (userObj) {
    if (!!userObj) {
      return fail(res, 'User already exists');
    }

    var parts = hash.generate(pass).split('$');

    postCouchUser({
      user: user,
      pass: parts[3],
      salt: parts[1]
    }, finish);
  });

  function finish(userObj) {
    req.session.user = userObj;
    res.send({
      success: true,
      user: userObj
    });
  }
}

function userExists(req, res) {
  var user = req.body.user;

  if (!user) {
    return fail(res, 'You must post a username');
  }

  getCouchUser(user, function (userObj) {
    res.send({
      success: true,
      exists: !!userObj
    });
  });
}

// -- Private Functions ------------------------------------

function fail(res, err) {
  res.send({
    success: false,
    err: err
  });
}

function getCouchUser(user, cb) {
  request(url + '/_design/_views/_view/user?key="' + user + '"',
    function (err, resp, body) {
      body = JSON.parse(body);
      body.rows = body.rows || [];
      cb(body.rows[0]);
    }
  );
}

function postCouchUser(user, cb) {
  request({
    url: url + '/',
    method: 'POST',
    json: user
  }, function (err, resp, body) {
    console.log(body);
    cb(user);
  });
}
