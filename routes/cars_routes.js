const Router = require('express');
const router = new Router();
const carController = require(  '../controller/cars_controller')

router.post('/car', carController.createUser )









model.exports = router