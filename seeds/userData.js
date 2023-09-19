const { User } = require('../models');

const userdata = [
    {
        id: 1,
        username: 'ssmith',
        password: 'password1234',
    },
    {
        id: 2,
        username: 'mjones',
        password: 'password4321',
    },
    {
        id: 3,
        username: 'kdoe',
        password: 'password6789'
    },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;