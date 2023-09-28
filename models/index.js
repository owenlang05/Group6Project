const User = require('./User');
const Review = require('./Review');

Review.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
} )

module.exports = {
    User,
    Review, 
};  