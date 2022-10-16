const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes');
const dashboardRoutes = require('./dashboardroutes');

// Setup paths for routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;