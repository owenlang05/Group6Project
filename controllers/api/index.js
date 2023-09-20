const router = require('express').Router();
const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');
const commentRoutes = require('./comment-routes');

router.use('/user', userRoutes);
router.use('/review', reviewRoutes);
router.use('/comment', commentRoutes);

module.exports = router;