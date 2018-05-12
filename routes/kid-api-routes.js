var db = require("../models");

module.exports = function (app) {
    app.get('/', function (req, res) {
        alert("hi");
    });
    app.get("/api/kidslist", function (req, res) {

        db.Kid.findAll({
        
        }).then(function (dbKid) {
            res.json(dbKid);
        });
    });

    app.post("/api/newkid", function (req, res) {
        db.Kid.create(req.body).then(function (dbKid) {
            res.json(dbKid);
        });
    });


    app.get("/api/getkiddetails/:username", function (req, res) {
        console.log("username="+req.params.username)
        db.Kid.findOne({
        where:{
            username:req.params.username
        }
        }).then(function (dbKid) {
            res.json(dbKid);
        });

    });


};
