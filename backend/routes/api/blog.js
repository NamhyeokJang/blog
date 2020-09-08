const router = require('express').Router()
const multer = require('multer')
const fs = require('fs');
const path = require('path')
const { Blog, Tag } = require('../../models')

const BLOG_PATH = './blog'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (req.files.cover) {
            cb(null, './images')
        } else if (req.files.file) {
            cb(null, './blog')
        }
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage })

router.get('/', async (req, res) => {
    const blogs = await Blog.findAll()

    res.json({
        blogs
    })
})

router.post('/', upload.fields([{ name: 'file' }, { name: 'cover' }]), async (req, res) => {
    const images = fs.readdirSync('./images')
    const { title, tags } = req.body
    const file = req.files.file[0]
    const cover = req.files.cover ? req.files.cover[0].originalname : images[parseInt(Math.random() * images.length) + 1]

    const addBlog = await Blog.create({
        title: title,
        filename: file.originalname,
        cover: cover,
        tag: tags.split(',')
    })

    res.json({ result: 'ok', blog: addBlog })
})

router.get('/md/:filename', (req, res) => {
    const { filename } = req.params
    fs.readFile(path.join(BLOG_PATH, filename), 'utf8', (err, md) => {
        res.json({ md })
    })
})

router.get('/te', (req, res) => {

    const images = fs.readdirSync('./images')

    res.json({ images })
})

module.exports = router