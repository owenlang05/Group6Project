const sequelize = require('../config/connection');
const seedPosts = require('./postData');
const seedUsers = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedPosts();

    await seedUsers();

    process.exit(0);
};

seedAll();