const { User } = require('../models');

const userdata = [
    {
        id: 1,
        username: 'Ken',
        password: "password",
    },
    {
        id: 2,
        username: 'Mary',
        password: "password",
    },
    {
        id: 3,
        username: 'Alan',
        password: "password",
    },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;