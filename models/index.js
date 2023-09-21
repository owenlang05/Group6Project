const User = require('./User');
const Review = require('./Review');
const Review = require('./Review');
const Comment = require('./Comment');
const Restaurant = require('./Restaurant');

Review.belongsTo(User, {
Review.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Review.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Review.belongsTo(Restaurant, {
    foreignKey: 'restaurantId',
    onDelete: 'CASCADE'
});

Restaurant.hasMany(Review, {
    foreignKey: 'reviewId',
    onDelete: 'CASCADE'
})

module.exports = {
    User,
    Comment,
    Review, 
    Restaurant
};  