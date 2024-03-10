const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Check your route!'))

module.exports = router;