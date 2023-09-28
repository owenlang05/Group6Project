const sequelize = require('../config/connection');
const seedReviews = require('./reviewData');
const seedUsers = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedReviews();

    await seedUsers();

    process.exit(0);
};

seedAll();