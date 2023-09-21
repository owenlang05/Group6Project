const router = require('express').Router();
const { Review, User } = require('../models');
const withAuth = require('../utils/auth');

// GET route for retrieving all posts
router.get('/', withAuth, (req, res) => {
    Review.findAll({
        where: {
            userId: req.session.userId
        },
        include: User
    })
    .then(dbReviewData => {
        const reviews = dbReviewData.map((review) => review.get({ plain: true }));
        res.render('all-posts-admin', {
            layout: 'dashboard',
            reviews
        });
    })
    .catch(err => {
        console.log(err);
        res.redirect('login');
    });
});

// GET route for new post when user is logged in
router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
        layout: 'dashboard'
    });
});

// GET route for editing a post when user is logged in
router.get('/edit/:id', withAuth, (req, res) => {
    Review.findByPk(req.params.id)
    .then(dbReviewData => {
        if (dbReviewData) {
            const review = dbReviewData.get({ plain: true });
            res.render('edit-post', {
                layout: 'dashboard',
                review
            });
        } else {
        res.status(404).end();
        }
    }) 
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;