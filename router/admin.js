// 引用express框架
const express = require('express');
// 创建尤里里鸭后台管理页面路由
const admin = express.Router();

// 挂载二级路由
// 添加用户
admin.post('/addUser', require('./admin/addUser'));
// 获取全部用户信息
admin.get('/users', require('./admin/users'));
// 修改用户的状态（启用/禁用）
admin.put('/users/:id/state/:type', require('./admin/editUserState'));
// 根据id查询用户
admin.get('/findUser/:id', require('./admin/getUserById'));
// 修改用户
admin.put('/editUser/:id', require('./admin/editUser'));
// 删除用户
admin.delete('/deleteUser/:id', require('./admin/deleteUser'));

// 添加文章
admin.post('/addArticle', require('./admin/addArticle'));
// 获取文章列表数据
admin.get('/articles', require('./admin/articles'));
// 根据id查询文章信息
admin.get('/findArticle/:id', require('./admin/findArticle'));
// 根据userId查询文章信息
admin.get('/findArticleByUserId/:id', require('./admin/findArticleByUserId'));
// 修改文章
admin.put('/editArticle/:id', require('./admin/editArticle'));
// 删除文章
admin.delete('/deleteArticle/:id', require('./admin/deleteArticle'));
// 更改头像
admin.post('/editAvatar/:id', require('./admin/editAvatar'));

module.exports = admin;