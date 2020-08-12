// 引用express框架
const express = require('express');
// 创建尤里里鸭页面路由
const home = express.Router();

// 挂载二级路由
// 实现登录功能
home.post('/login', require('./home/login'));
// 实现注册功能
home.post('/register', require('./home/register'));
// 修改用户头像
home.post('/editAvatar/:id', require('./home/editAvatar'));
// 评论文章
home.post('/comment', require('./home/comment'));
// 获取评论列表
home.get('/getComment/:id', require('./home/getComment'));

module.exports = home;