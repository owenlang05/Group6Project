const router = require("express").Router();
const { Review, Comment, User } = require("../models");

// GET route for retrieving all posts

router.get("/", async (req, res) => {
  res.render("help");
});


module.exports = router;
