const { Sequelize, Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');
// const { Review } = require('.');

class Review extends Model {}

Review.init(
    {
        body: {
            type: DataTypes.STRING
        },
        restaurant_id: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        modelName: 'Review',
        freezeTableName: true
    }
);

module.exports = Review;

