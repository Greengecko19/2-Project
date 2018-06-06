var path = require("path");

module.exports = function(app) {


  app.get("/", function(req, res) {
    res.render(path.join(__dirname, '../views'));
  });

  app.get("/profile", function(req, res) {
    res.render('profile.handlebars');
  });

  app.get("/map", function(req, res) {
    res.render('map.handlebars');
  });

  app.get("/signup-pet", function(req, res) {
    res.render("signup-pet.handlebars");
  });

  app.get("/terms", function(req, res) {
    res.render("terms.handlebars");
  });
};