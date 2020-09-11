const router = require('express').Router()
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const IMAGE_PATH = './images'

router.get('/:filename', (req, res) => {
    const { filename } = req.params
    const isOriginal = req.query.original ? true : false

    fs.readFile(path.join(IMAGE_PATH, filename), (err, data) => {
        if (isOriginal) return res.send(data)
        sharp(data)
            .resize(320, 240)
            .toBuffer()
            .then(data => res.send(data))
    })
})

module.exports = router