const User = require(`./user`);
const Post = require(`./post`);
const Comment = require(`./comment`);

User.hasMany(Post, {
    forigenKey: `user_id`,
    onDelete: `CASCADE`
});




module.exports = { User, Post, Comment };