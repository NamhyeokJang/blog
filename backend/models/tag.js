module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tag', {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        timestamps: false,
    })
}