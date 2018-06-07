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
  // req.user is created automatically by express-session and passport
  // the req.user object is identified based on a browser cookie
  res.render('profile.handlebars', req.user);
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  })
}