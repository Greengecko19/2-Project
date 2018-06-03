var path = require("path");

// Routes
// =============================================================
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
};