const router = require('express').Router();
const fetch = require('node-fetch');
require('dotenv').config();

router.get('/:query', async (req, res) => {
    const query = req.params.query;

    const url = `https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=${query}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.TRIPADVISOR_API_KEY,
            'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}) 

module.exports = router;