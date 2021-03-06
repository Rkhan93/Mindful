// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });


  app.post("/api/projects", (req, res) => {
    db.Project.create({
      projectName: req.body.projectName,
      projectDescription: req.body.projectDescription
    })
      .then((dbProject) => {
        res.json(dbProject);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.post("/api/tasks", (req, res) => {
    db.Tasks.create({
      taskName: req.body.taskName,
      taskOwner: req.body.taskOwner,
      ProjectId: req.body.taskID 
    })
      .then((dbTask) => {
        res.json(dbTask);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
