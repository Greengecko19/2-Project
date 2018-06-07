const authController = require('../controllers/authcontroller.js');
const path = require('path');

module.exports = function(app, passport) {

  app.get('/', (req, res, next) => {
    res.render(path.join(__dirname, '../views'));
    // res.send('Welcome to PetApp');
  });

  app.get('/signup', authController.signup);

  app.get('/signin', authController.signin);

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/signup-pet',
    failureRedirect: '/signin'
  }), (req, res) => {
    res.render('/signup', {
      message: req.flash('signInMessage'),
    });
  });

  app.get('/profile', isLoggedIn, authController.userloggedin);

  // app.get('/signup-pet', isLoggedIn, authController.petsignup);


  app.get('/logout', authController.logout);

  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
  }), (req, res) => {
    res.render('/signup', {
      message: req.flash('signInMessage'),
    });
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/signin');
  };
}