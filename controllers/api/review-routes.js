const router = require('express').Router();
const { Review, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const body = req.body;
        console.log(req.session.userId);
        Review.create({ ...body, userId: req.session.userId })
            .then(newReview => {
                res.json(newReview);
            })
        } catch(err) {
        res.status(500).json(err);
    };
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        console.log(req.body, req.params.id)
        await Review.update(req.body, {
        where: {
                id: req.params.id
                }
            })
                .then(affectedRows => {
                if (affectedRows > 0) {
                res.status(200).end();
                } else {
                res.status(404).end();
                } 
            }) 
        } catch(err) {
            res.status(500).json(err);
    };
});

router.delete('/:id', withAuth, (req, res) => {
    console.log(req.body, req.params.id)
    Review.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(affectedRows => {
        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        } 
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;