const { Review } = require('../models');

const reviewdata = [
    {
        title: 'Jack Stack',
        body: 'Good BBQ, upscales setting so great for taking out of town guests. Not the best in town, though',
    },
    {
        title: 'The Roost',
        body: 'Great diner for breakfast!',
    },
    {
        title: 'The Bristol',
        body: 'Best, fresh seafood on town. Love the crab cakes and lobster bisque!' 
    },
];

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;