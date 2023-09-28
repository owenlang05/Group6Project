const router = require("express").Router();
const { Review, User } = require("../models");

// GET route for retrieving all posts

router.get("/", async (req, res) => {
  res.render('all-posts-admin');

});


// GET route for the signup page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

// GET route for the login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// GET route for the dashboard page. If a user is not logged in, redirect to the login page
router.get("dashboard", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  res.render("dashboard");
});

module.exports = router;
