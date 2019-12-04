const express = require('express');
const homeController = require('../controller/homeController')
const router = express.Router();

router.post('/proses', homeController.prosesPost)



module.exports = router;