// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/kidspage.html"));
  });

  // cms route loads cms.html
  app.get("/parent", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/parent.html"));
  });

  // blog route loads blog.html
  app.get("/kid", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/kid.html"));
  });

//   // authors route loads author-manager.html
//   app.get("/authors", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
//   });

};