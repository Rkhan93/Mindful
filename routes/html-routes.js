// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the projects page
    if (req.user) {
      res.redirect("/projects");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the projects page
    if (req.user) {
      res.redirect("/projects");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/projects", isAuthenticated, (req, res) => {
  //   // res.render("project", )
  //   res.sendFile(path.join(__dirname, "../public/indexProject.html"));
  // });

  // Load all projects from database
  app.get("/projects", (req, res) => {
    db.Project.findAll({})
      .then((dbProjects) => {
        res.render("projects", { projects: dbProjects });
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Load tasks for each project
  app.get("/tasks/:id", (req, res) => {
    db.Tasks.findAll({
      where: {
        ProjectId: req.params.id
      }
    })
    .then((dbTasks) => {
      console.log("Tasks", dbTasks);
      res.render("tasks", { tasks: dbTasks})
    })
    .catch(err => {
      res.status(401).json(err);
    });
  })
};
