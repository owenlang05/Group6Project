const User = require('./User');
const Review = require('./Review');
const Comment = require('./Comment');
const Restaurant = require('./Restaurant');

Review.belongsTo(User, {
    foreignKey: 'userId',
});

Review.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
});

User.hasMany(Comment, {
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

User.hasMany(Review, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
} )

module.exports = {
    User,
    Comment,
    Review, 
    Restaurant
};  