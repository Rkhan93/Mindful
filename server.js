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
