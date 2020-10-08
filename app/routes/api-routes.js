// Dependencies
// =============================================================
var Project = require("../models/projects");

// Routes
// =============================================================
module.exports = function(app) {
    app.get("/api/projects", function(req, res) {
        Project.findAll({}).then(function(results) {
            res.json(results)
        })
    })
}