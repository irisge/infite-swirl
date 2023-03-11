const express = require('express');

const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const authorization = require('../middlewares/auth');

const router = express.Router();

router.use('/users', authorization, userRoutes);
router.use(authRoutes);

module.exports = router;
