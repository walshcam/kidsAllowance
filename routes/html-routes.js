var path = require("path");
var db = require("../models");
module.exports = function(app) {
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/view.html"));
    });
  
    app.get("/newparent", function(req, res){
      res.sendFile(path.join(__dirname, "../public/newparent.html"))
    });

    app.get("/newkid", function(req, res){
      res.sendFile(path.join(__dirname, "../public/newkid.html"))
    });

    app.get("/returningparent", function(req, res){
      res.sendFile(path.join(__dirname, "../public/returningparent.html"))
    });

    app.post("/returningparent",function(req,res){ 
      db.Parent.findOne({
        where:{
          username:req.body.username
        }
      }).then(function (dbUser) {
          if(dbUser){
            console.log(dbUser);
            if(dbUser.dataValues.parentpassword===req.body.password){
              res.redirect("https://www.google.com/");
            }
            else{
              res.redirect("/returningparent");
              
            }
          }
      });

    });

    app.post("/returningkid",function(req,res){ 
      db.Kid.findOne({
        where:{
          username:req.body.username
          
        }
      }).then(function (dbUser) {
        //res.send("passed");
        console.log(dbUser);
          if(dbUser){
            console.log(dbUser);
            if(dbUser.dataValues.kidpassword===req.body.password){
              res.redirect("https://www.google.com/");
            }
            else{
              res.redirect("/returningkid");
              
            }
          }
      });

    });

    app.get("/returningkid", function(req, res){
      res.sendFile(path.join(__dirname, "../public/returningkid.html"))
    });
};
  