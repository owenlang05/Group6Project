const { Post } = require('../models');

const postdata = [
    {
        title: 'What is Javascript?',
        body: 'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.',
    },
    {
        title: 'What is CSS?',
        body: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
    },
    {
        title: 'What is Node.js?',
        body: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more.',
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;