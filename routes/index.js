const router = require("express").Router();
const isLoggedIn = require("./../middleware/isLoggedIn");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// GET /main
router.get("/main", (req, res) => {
  res.render("secret-view");
});

// GET /private
router.get("/private", (req, res) => {
  res.render("secret-page");
});

module.exports = router;
