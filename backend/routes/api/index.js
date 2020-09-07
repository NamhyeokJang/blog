const router = require('express').Router()

router.use('/login', require('./login'))
router.use('/desk', require('./desk'))
router.use('/nas', require('./nas'))
router.use('/blogs', require('./blog'))
router.use('/tags', require('./tag'))
router.use('/images', require('./image'))
router.use('/mail', require('./mail'))

router.get('/', (req, res) => {
    res.send('GET: /api')
})

module.exports = router