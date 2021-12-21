const express = require('express')
const router = express.Router()
const helloWorldController = require('../controllers/helloWorldController');

router.get('/', helloWorldController.helloWorld)
router.get('/another-route', helloWorldController.helloWorld)

module.exports = router