const express = require('express');
const router = express.Router();
const counterController = require('../../controller/counterController');


router.route('/')
    .get(counterController.getCounter)
    .put(counterController.updateCounter)

module.exports = router;
