const express = require('express');
const userRoutes = require('./UserRoutes');
const categoryRoutes = require('./CategoryRoutes');


const router = express.Router();

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);


module.exports = router;
