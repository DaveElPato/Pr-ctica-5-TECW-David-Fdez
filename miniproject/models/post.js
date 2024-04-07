'use strict';
const {Model, DataTypes} = require('sequelize');
// Definition of the Quiz model:
module.exports = (sequelize) => {
    class Post extends Model {}
    Post.init (
        {
        title: {
        type: DataTypes.STRING,
        validate: {notEmpty: {msg: "El título no puede estar vacío"}}
        },
        body: {
        type: DataTypes.TEXT,
        validate: {notEmpty: {msg: "El cuerpo del post no puede estar vacío"}}
        },
        attachmentId: {
        type: DataTypes.INTEGER,
        allowNull: true
        }
        
}, 
{sequelize}
);
    return Post;
};
