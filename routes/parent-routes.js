var db = require("../models");

module.exports = function(app) {
    
    //Creates page that shows all parents - May not need this
    app.get("/api/parent", function(req, res) {
        db.Parent.findAll({
            include: [db.Kid, db.Chore]
        }).then(function(dbParent) {
            res.json(dbParent);
        });
    });
    
    //Creates page that shows individual parent
    //and  
    app.get("/api/parent/:id", function(req, res) {
        db.Parent.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Kid]
        }).then(function(dbParent) {
            res.json(dbParent);
        });
    });

    app.put("/api/total", function(req,res) {        
        db.Kid.update(req.body.total,
        {  
            where: {
                username: req.body.username
            }
        }).then (function(dbTotal) {
            res.json(dbTotal)
        });
    });



    //Post New Parent
    app.post("/api/parent", function(req, res) {
        db.Parent.create(req.body).then(function(dbParent) {
            res.json(dbParent);
        });
    });

    //Delete A Parent
    app.delete("/api/parent/:id", function(req, res) {
        db.Parent.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbParent) {
            res.json(dbParent);
        });
    });

};