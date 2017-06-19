const express = require('express');
const router = express.Router();
const store = require('../controllers/storeController');
// Do work here
router.get('/', store.homePage);

module.exports = router;
