const router = require("express").Router();
const { Review, User } = require("../models");
const withAuth = require("../utils/auth");

// GET route for retrieving all posts
router.get("/", withAuth, async (req, res) => {
  try {
    await Review.findAll({
      where: {
        userId: req.session.userId,
      },
      include: User,
    }).then((dbReviewData) => {
      const reviews = dbReviewData.map((review) => review.get({ plain: true }));
      res.render("all-posts", {
        reviews,
      });
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});

// GET route for new post when user is logged in
router.get("/new", withAuth, (req, res) => {
  res.render("new-post");
});

// GET route for editing a post when user is logged in
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    await Review.findByPk(req.params.id).then((dbReviewData) => {
      if (dbReviewData) {
        const review = dbReviewData.get({ plain: true });
        console.log(review)
        res.render("edit-post", {
          review,
        });
      } else {
        res.status(404).end();
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).render("error");
  }
});

module.exports = router;
