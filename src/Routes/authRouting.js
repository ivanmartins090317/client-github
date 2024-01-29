const express = require('express');
const authController = require('../controllers/authController')
const verifyAcessToken = require('../controllers/verifyAcessToken.js')
const middlewareVerifyToken = require('../config/middleware')
const apiRepo = require('../controllers/apiRepo.js')
// const User = require("../Models/usersModel")

// const app = express();
const router = express.Router();

router.post('/authenticate', authController.authenticate)
router.post('/register', authController.register)
router.use(middlewareVerifyToken)
 
router.get('/', verifyAcessToken.verifyToken);


module.exports = router