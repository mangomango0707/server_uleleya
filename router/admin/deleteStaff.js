// 导入曲谱集合
const { Staff } = require('../../model/staff');
// 导入用户集合
// const { User } = require('../../model/user');
// 导入响应数据模型
const { SuccessModel, ErrorModel } = require('../../model/resModel');

module.exports = async(req, res) => {
    // 接收客户端传递过来的id, restful获取参数，用req.params
    const id = req.params.id;

    await Staff.findOneAndDelete({ _id: id });

    res.send(new SuccessModel('删除曲谱成功！'));
}