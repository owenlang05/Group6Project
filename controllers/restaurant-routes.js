const router = require('express').Router();
const fetch = require('node-fetch');
const {Review, User} = require('../models')
require('dotenv').config();

router.get('/view/:id', async (req, res) => {

    const id = req.params.id;

    // const url = `https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails?restaurantsId=${id}`;

    // This can be used if API is exhausted for a singe restaurant 
    const url = "http://localhost:3001/data/location-detail.json";

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.TRIPADVISOR_API_KEY,
            'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const restaurant = result.data.location;
        const image = restaurant.photo[0].images.large;

        const reviewData = await Review.findAll({
            where: {
                restaurant_id: id
            }
        }, {
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })

        const reviews = reviewData.map((review) => review.get({plain: true}));
        console.log(image)
        
        res.render('restaurant-detail', {restaurant, image, id, reviews})
    } catch (error) {        
        console.error(error);
        res.status(500).render('error')
    }
    

})

router.get('/:query', async (req, res) => {
    const query = req.params.query;

    var url = `https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=${query}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.TRIPADVISOR_API_KEY,
            'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        const locationId = result.data[0].locationId;

        url = `https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=${locationId}`;
        try {
            const response_2 = await fetch(url, options);
            const result_2 = await response_2.json();

            const restaurants = result_2.data.data.map((data) => {return(data)});
            // console.log(restaurants[0])

            res.render('restaurants', {restaurants })
        }
        catch (error) {
            console.error(error);
            res.status(500).render('error')
        }

    } catch (error) {
        console.error(error);
        res.status(500).render('error')
    }
    
}) 

module.exports = router;