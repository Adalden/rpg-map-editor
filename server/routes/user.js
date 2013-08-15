/* jshint node:true, strict:false */
module.exports = function (app) {
  app.get('/user', getUser);
};

function getUser(req, res) {
  if (!req.session.user) {
    res.writeHead(403);
    res.end();
    return;
  }

  res.send({
    success: true,
    user: req.session.user
  });
}
