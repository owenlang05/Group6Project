const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Review } = require('.');

class Review extends Model {}

Review.init(
    { 
        title: DataTypes.STRING,
        body: DataTypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Review;