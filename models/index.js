const User = require('./User');
const Review = require('./Review');

Review.belongsTo(User, {
    foreignKey: 'userId',
});

User.hasMany(Review, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
} )

module.exports = {
    User,
    Review, 
};  