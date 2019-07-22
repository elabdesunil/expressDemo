
const router = require('express').Router()
module.exports = router

router.use('/students', require('./students'))
router.use('/tests', require('./tests'))
