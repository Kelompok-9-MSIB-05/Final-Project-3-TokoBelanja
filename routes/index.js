const express = require('express');
const userRoutes = require('./UserRoutes');
const categoryRoutes = require('./CategoryRoutes');
const productRoutes = require('./productRoutes');


const router = express.Router();

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);


module.exports = router;
