const router = require('express').Router()
const fs = require('fs');
const path = require('path')
const { Blog, Tag } = require('../../models')

const BLOG_PATH = './blog'

router.get('/', async (req, res) => {
    const blogs = await Blog.findAll({
        include: {
            model: Tag,
            through: {
                attributes: []
            }
        }
    })

    res.json({
        blogs
    })
})

router.get('/md/:filename', (req, res) => {
    const { filename } = req.params
    fs.readFile(path.join(BLOG_PATH, filename), 'utf8', (err, md) => {
        res.json({ md })
    })
})


module.exports = router