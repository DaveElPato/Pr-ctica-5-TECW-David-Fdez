// Load ORM
const Sequelize = require('sequelize');
// To use SQLite data base:
// DATABASE_URL = sqlite:quiz.sqlite
// const url = process.env.DATABASE_URL ||
// "sqlite:blog.sqlite";
const sequelize = new Sequelize("sqlite:blog.sqlite");
const Post = require('./post')(sequelize);
const Attachment = require('./attachment')(sequelize);


Attachment.hasOne(Post, {as: 'post', foreignKey: 'attachmentId'});
Post.belongsTo(Attachment, {as: 'attachment', foreignKey: 'attachmentId'});



module.exports = {sequelize, Post, Attachment};