module.exports = (sequelize, DataTypes) => {
    return sequelize.define('blog_tag', {
    }, {
        timestamps: false,
    })
}