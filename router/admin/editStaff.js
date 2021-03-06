// 导入曲谱集合
const { Staff } = require('../../model/staff');
// 导入用户集合
const { User } = require('../../model/user');
// 导入响应数据模型
const { SuccessModel, ErrorModel } = require('../../model/resModel');

module.exports = async(req, res) => {
    // 接收客户端传递过来的id, restful获取参数，用req.params
    const id = req.params.id;
    // 接收客户端传递过来的请求参数
    const { title, author, pic, content, type } = req.body;
    // console.log(req.body);

    // 根据id查询用户
    let user = await User.findOne({ username: author.username });
    if (user) {
        // 更新曲谱信息
        await Staff.updateOne({ _id: id }, {
            title: title,
            author: user._id,
            pic: pic,
            content: content,
            type: type
        });
        res.send(new SuccessModel('修改曲谱成功'));
    } else {
        res.send(new ErrorModel('修改曲谱失败'));
    }
}