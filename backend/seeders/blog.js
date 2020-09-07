const fs = require('fs')
const random = require('random')
const { Blog, Tag, BlogTag } = require('../models')

const createBlog = async () => {
    const blogs = fs.readdirSync('./blog')
    const cover = fs.readdirSync('./images')
    const tags = await Tag.findAll({
        raw: true
    })
    blogs.forEach(async (blog) => {
        const tag = tags[random.int(1, tags.length)]
        const description = fs.readFileSync(`./blog/${blog}`).toString()
        await Blog.create({
            title: blog.split('-')[0],
            filename: blog,
            cover: cover[random.int(0, cover.length - 1)],
            description: description.split('\n\n')[0],
            tags: [
                {
                    name: tag.name,
                }
            ]
        }, {
            include: Tag
        })
    })

}

module.exports = createBlog