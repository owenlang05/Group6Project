const { User } = require('../models');

const userdata = [
    {
        id: 1,
        username: 'Ken',
    },
    {
        id: 2,
        username: 'Mary',
    },
    {
        id: 3,
        username: 'Alan',
    },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;