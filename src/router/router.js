const express = require('express');
const router = new express.Router();

router.get("/", (req, res) => {
    res.render("index");
});
router.get("/about", (req, res) => {
    res.render("about");
})
router.get("/weather", (req, res) => {
    res.render('weather');
});
router.get("*", (req, res) => {
    res.render("404page");
});
module.exports = router;