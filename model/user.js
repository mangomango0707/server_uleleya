// 创建用户集合
const mongoose = require('mongoose');
// 导入bcrypt
const bcrypt = require('bcrypt');

// 创建用户集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 40,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // 头像
    avatar: {
        type: String,
        default: null
    },
    // 用户角色
    role: {
        type: String,
        default: 'normal'
    },
    // 启用状态
    state: {
        type: Boolean,
        default: true
    }
});

// 创建集合
const User = mongoose.model('User', userSchema);



// 验证用户信息
const validateUser = user => {
    // 自定义验证规则
    const Schema = {
        username: Joi.string().min(2).max(30).required().error(new Error('用户名不符合要求')),
        email: Joi.string().email().required().error(new Error('邮箱地址不符合要求')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{2,30}$/).required().error(new Error('密码不符合要求')),
        role: Joi.string().valid('normal', 'admin').error(new Error('角色非法')),
        state: Joi.boolean().valid(0, 1).error(new Error('状态非法'))
    };
    // 进行验证
    return Joi.validate(user, Schema);
};

// 将用户集合作为模块成员导出
module.exports = {
    User,
    validateUser
};