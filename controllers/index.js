const router = require('express').Router();

const dashboardRoutes = require('./dashboard-routes');
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const restaurantRoutes = require('./restaurant-routes');


router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/restaurant', restaurantRoutes);
module.exports = router;