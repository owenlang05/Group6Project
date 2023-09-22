const router = require('express').Router();
const fetch = require('node-fetch');
require('dotenv').config();

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
        let response = await fetch(url, options);
        let result = await response.json();
        const locationId = result.data[0].locationId;

        console.log(result, locationId);

        url = `https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=${locationId}`;
        try {
            response = await fetch(url, options);
            result = await response.json();
    
            console.log(result);

            const restaurants = result.data.data.map((data) => {return(data)});
            // for (restaurant of restaurants) {
            //     console.log(restaurant.name)
            // }
            // console.log(restaurants)
            // res.status(200).json(result)

            res.render('restaurants', {restaurants})
        }
        catch (error) {
            console.error(error);
            res.status(500).json(error)
        }

    } catch (error) {
        console.error(error);
        res.status(500).json(error)
    }
    
}) 

module.exports = router;