const router = require('express').Router()
const { Tag } = require('../../models')

router.get('/', async (req, res) => {
    const tags = await Tag.findAll()

    res.json({
        tags: tags
    })
})

module.exports = router