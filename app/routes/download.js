const express = require('express')
const router = express.Router()

router.get('/:id', require('../utils/middleware.js')(), require('../controllers/download/get.js'))
router.post('/:id', require('../utils/middleware.js')(), require('../controllers/download/post.js'))

module.exports = router
