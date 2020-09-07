const sequelize = require('../models').sequelize

const cleanDB = () => {
    sequelize.sync({ force: true })
}

module.exports = cleanDB