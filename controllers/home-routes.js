const router = require('express').Router();
const { Review, Comment, User } = require('../models');

// GET route for retrieving all posts
router.get('/', (req, res) => {
    Review.findAll({
        include: [User],
    })
    .then((dbReviewData) => {
        const reviews = dbReviewData.map((review) => review.get({ plain: true }));
        res.render('all-posts', { reviews });
    })
    .catch((err) => {
        res.json(500).json(err);
    });
});

router.get('/review/:id', (req, res) => {
    Review.findByPk(req.params.id, {
        include: [
            User,
            {
                model: Comment,
                include: [User],
            },
        ],
    })
    .then((dbReviewData) => {
        if (dbReviewData) {
            const review = dbReviewData.get({ plain: true });
            console.log(review);
            res.render('single-posts', { review });
        } else {
            res.status(404).end();
        }
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

// GET route for the signup page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

// GET route for the login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// GET route for the dashboard page. If a user is not logged in, redirect to the login page
router.get('/layouts/dashboard', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('dashboard');
});

module.exports = router;