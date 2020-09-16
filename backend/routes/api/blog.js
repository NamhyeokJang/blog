const router = require('express').Router()
const multer = require('multer')
const uf = require('unique-filename')
const fs = require('fs');
const path = require('path')
const { Blog } = require('../../models');
const { Op } = require('sequelize')

const BLOG_PATH = './blog'
const IMAGE_PATH = './images'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (req.files.cover) {
            cb(null, IMAGE_PATH)
        } else if (req.files.md) {
            cb(null, BLOG_PATH)
        }
    },
})

const upload = multer({ storage })

// Blog 
router.get('/', async (req, res) => {
    const page = req.query.page ? req.query.page : 1
    const limit = req.query.limit ? req.query.limit : 9

    /* where */
    let where = {}

    req.query.tag ? // Tag Search
        where.tag = { [Op.like]: `%${req.query.tag}%` } : null
    req.query.title ? // Title Search
        where.title = { [Op.like]: `%${req.query.title}%` } : null

    const blogs = await Blog.findAndCountAll({
        limit: parseInt(limit),
        offset: parseInt(page - 1) * parseInt(limit),
        order: [['updatedAt', 'desc']],
        where
    })

    res.json({
        blogs
    })
})

// Blog 업로드
router.post('/', upload.fields([{ name: 'md' }, { name: 'cover' }]), async (req, res) => {
    const images = fs.readdirSync(IMAGE_PATH)
    const { title, tags, description } = req.body
    console.log('tags', tags)
    const md = req.files.md[0]
    const cover = req.files.cover ? req.files.cover[0].originalname : images[parseInt(Math.random() * images.length) + 1]
    const addBlog = await Blog.create({
        title: title,
        filename: md.filename,
        cover: cover,
        description: description,
        tag: tags ? tags.split(',') : null,
        updatedAt: new Date()
    })

    res.json({ result: 'ok', blog: addBlog })
})

//Blog Upload String
router.post('/write', async (req, res) => {
    const images = fs.readdirSync(IMAGE_PATH)
    const { title, content, tags } = req.body
    const description = content.substring(0, 300)
    const filename = uf('') + uf('')
    const cover = images[parseInt(Math.random() * images.length) + 1]
    fs.writeFile(`./blog/${filename}`, content, err => {
        return
    })

    await Blog.create({
        title: title,
        filename: filename,
        cover: cover,
        description: description,
        tags: tags ? tags : null,
        updatedAt: new Date()
    })

    res.end()
})

router.delete('/:filename', async (req, res) => {
    const { filename } = req.params
    await Blog.destroy({
        where: {
            filename: filename
        }
    })
    fs.unlink(`${BLOG_PATH}/${filename}`, err => {
        console.log(err)
    })
    res.end()
})

//md파일 
router.get('/md/:filename', (req, res) => {
    const { filename } = req.params
    fs.readFile(path.join(BLOG_PATH, filename), 'utf8', (err, md) => {
        res.json({ md })
    })
})


module.exports = router