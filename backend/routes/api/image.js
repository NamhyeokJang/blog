const router = require('express').Router()
const fs = require('fs')
const path = require('path')

const IMAGE_PATH = './images'

router.get('/:filename', (req, res) => {
    const { filename } = req.params

    fs.readFile(path.join(IMAGE_PATH, filename), (err, data) => {
        res.send(data)
    })
})

module.exports = router