const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        postId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Review',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        modelName: 'Comment',
        freezeTableName: true
    },
);

module.exports = Comment;