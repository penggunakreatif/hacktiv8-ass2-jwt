const router = require('express').Router();
const userController = require("../controllers/userController");
const authentication = require('../middlewares/authentication');

const cityController = require('../controllers/cityController');

router.post('/users/register', userController.create);
router.post('/users/login', userController.login);

router.get('/users/:userId', authentication, userController.view);

router.get('/city', authentication, cityController.getAllCity);

module.exports = router;

