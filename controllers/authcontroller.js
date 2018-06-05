var exports = module.exports = {};

exports.signup = function(req, res) {
  console.log(req.body);
  res.render('signup.handlebars');
};

exports.signin = function(req, res) {
  console.log(req.body);
  res.render('signin.handlebars');
};

exports.userloggedin = function(req, res) {
  res.render('profile.handlebars');
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  })
}