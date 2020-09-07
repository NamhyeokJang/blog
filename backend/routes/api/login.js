const router = require('express').Router()

router.post('/', (req, res) => {
    const { password } = req.body

    if (password === process.env.PASSWORD) {
        return res.json({ result: 'ok', message: 'success' })
    } else {
        return res.json({ result: 'fail', message: 'faied' })
    }
})

module.exports = router