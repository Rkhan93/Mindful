//HTML elements to edit the DOM: buttons
var homePageEl = document.getElementById("homePage");
var loginPageEl = document.getElementById("loginPage");
var projectPageEl = document.getElementById("projectPage");
var taskPageEl = document.getElementById("taskPage");

var loginBtn = document.getElementById("loginBtn");

function showLogin () {
    homePageEl.style.display = "block";
    loginPageEl.style.display = "flex";
}


loginBtn.addEventListener("click", showLogin);


// Dependencies
// ====================================================
var express = require("express");

// Express setup
// ====================================================
var app = express();
var PORT = process.env.PORT || 8080

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes
// ====================================================
require("./app/routes/api-routes")(app);
//require("./app/routes/html-routes")(app);

// Start server
// ====================================================
app.listen(PORT, function() {
    console.log("App listening on port " + PORT)
})
