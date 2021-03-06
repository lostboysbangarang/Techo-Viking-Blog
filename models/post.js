const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            refrences: { 
                model: `user`,
                key: `user_name`,
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date_created: {
            type: DataTypes.DATETIME,
            allowNull: false,
            defaultValue: DateTime.now()
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: `user`,
                key: `id`
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: `post`
    }
);

model.exports = Post;