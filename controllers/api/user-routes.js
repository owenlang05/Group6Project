const router = require('express').Router();
const { User } = require('../../models');

// POST route to create a new user and start a new session
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = dbUserData.id;
            res.status(200).json(dbUserData);
        });
    })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);  
    });
});

// POST route for existing user to log in 
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
        }
    }) .then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'User not found.' });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password.' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = dbUserData.id;
            res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();        
        });
    }
    else {
        res.status(404).end();
    }
});

router.delete('/user/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id.' });
            return;
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;