const User = require('./User');
const Review = require('./Review');
const Comment = require('./Comment');

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

User.hasMany(Review, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
} )

module.exports = {
    User,
    Comment,
    Review
};