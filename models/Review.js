const { Sequelize, Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        body: {
            type: DataTypes.STRING
        },
        restaurant_id: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
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

