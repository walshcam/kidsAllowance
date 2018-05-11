var db = require("../models");

module.exports = function (app) {

    app.get("/api/parentslist", function (req, res) {

        db.Parent.findAll({
        
        }).then(function (dbParent) {
            res.json(dbParent);
        });
    });


    app.post("/api/newparent", function (req, res) {
        db.Parent.create(req.body).then(function (dbParent) {
            res.json(dbParent);
        });
    });

};
