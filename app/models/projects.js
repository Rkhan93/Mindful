// Dependencies
// =============================================================

var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js")

var Project = sequelize.define("project", {
    projectName: Sequelize.STRING,
    
})

// Sync with database
Project.sync(); 



// Export
module.exports = Project;