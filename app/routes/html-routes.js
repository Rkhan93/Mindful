const fs = require("fs")
const db = require("../db/db.json")
const router = require("express").Router()


//login page
router.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
//home page
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/indexHome.html"))
})
//project page
router.get("/projects", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/indexProject.html"))
})
//task page
router.get("/task", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/indexTasks.html"))
})
module.exports = server.js