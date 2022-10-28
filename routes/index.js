const express = require('express');
const router = express.Router();

//homepage
const homePageController = require('../controllers/homeController');
router.get('/', homePageController.home);

//creating tasks
const createController = require('../controllers/createController');
router.post('/create', createController.create);

//deleting tasks
const deleteController = require('../controllers/deleteController');
router.get('/delete', deleteController.delete);

module.exports = router;