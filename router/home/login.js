// 导入用户集合
const { User } = require('../../model/user');
// 导入加密模块
const bcrypt = require('bcrypt');
// 导入响应数据模型
const { SuccessModel, ErrorModel } = require('../../model/resModel');
// 导入jwt token工具
const jwt = require('jsonwebtoken');

module.exports = async(req, res) => {
    // 接收post请求参数
    const { email, password } = req.body;
    // console.log(req.body);
    // 做二次验证
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).send(new ErrorModel('邮件地址或者密码错误！'));
    }

    // 根据邮箱地址查询用户
    let user = await User.findOne({ email: email });
    // console.log(user);
    // 判断是否查询到用户
    if (user) {
        // 比对客户端传递过来的密码是否正确==>利用bcrypt加密模块进行比对
        let isValid = await bcrypt.compare(password, user.password);
        if (isValid) {
            // 登录成功，添加token
            // 将用户id传入并生成token
            let token = jwt.sign({ userId: user._id }, 'Fizz', { expiresIn: 60 * 60 });
            // console.log(token);
            // 将token返回给客户端
            res.send(new SuccessModel(user, "登录成功", token));
        } else {
            // 密码比对失败
            return res.status(400).send(new ErrorModel('邮件地址或者密码错误！'));
        }
    } else {
        return res.status(400).send(new ErrorModel('邮件地址或者密码错误！'));
    }
};