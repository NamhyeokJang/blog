module.exports = (sequelize, DataTypes) => {
    return sequelize.define('blog', {
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        filename: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        cover: {
            type: DataTypes.STRING(200)
        },
        description: {
            type: DataTypes.STRING
        },
        tag: {
            type: DataTypes.STRING,
            get: function () {
                return JSON.parse(this.getDataValue('tag'));
            },
            set: function (val) {
                return this.setDataValue('tag', JSON.stringify(val));
            }
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('now()'),
        }

    }, {
        timestamps: false,
    })
}