const express = require('express');
const router = express.Router();
const storeCtrl = require('../controllers/storeController');

const {catchErrors} = require('../handlers/errorHandlers');
// Do work here
router.get('/', storeCtrl.homePage);
router.get('/add', storeCtrl.addStore);
router.post('/add', catchErrors(storeCtrl.createStore));

module.exports = router;
