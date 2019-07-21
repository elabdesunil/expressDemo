
const router = require('express').Router()
module.exports = router

router.use('/puppies', require('./puppies'))
router.use('/kittens', require('./kittens'))