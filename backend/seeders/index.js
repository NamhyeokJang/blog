const cleanDB = require('./clean')
const createTag = require('./tag')
const createBlog = require('./blog')
const SEED_TYPE = process.argv[2]

const init = () => {
    switch (SEED_TYPE) {
        case 'clean':
            cleanDB()
            break;
        case 'tag':
            createTag()
            break;
        case 'blog':
            createBlog()
            break;
        default:
            break;
    }
}

init()