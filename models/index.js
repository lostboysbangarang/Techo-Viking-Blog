const User = require(`./user`);
const Post = require(`./post`);
const Comment = require(`./comment`);

User.hasMany(Post, {
    forigenKey: `user_id`,
    onDelete: `CASCADE`
});

Post.belongsTo(User, {
    forigenKey: `user_id`
});

module.exports = { User, Post, Comment };