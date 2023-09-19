const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// GET route for retrieving all posts
router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            userId: req.session.userId
        },
        include: User
    })
    .then(dbPostData => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        console.log(posts)
        res.render('all-posts-admin', {
            layout: 'dashboard',
            posts
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
    Post.findByPk(req.params.id)
    .then(dbPostData => {
        if (dbPostData) {
            const post = dbPostData.get({ plain: true });
            res.render('edit-post', {
                layout: 'dashboard',
                post
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