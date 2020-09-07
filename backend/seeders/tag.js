const { Tag, sequelize } = require('../models')

const TAGS = ['react', 'express', 'javascript', 'etc']

const createTag = async () => {

    TAGS.forEach(async (value) => {
        await Tag.create({
            name: value
        })
    })
}

module.exports = createTag