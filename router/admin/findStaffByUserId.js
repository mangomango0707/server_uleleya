// 导入曲谱集合
const { Staff } = require('../../model/staff');
// 导入用户集合
const { User } = require('../../model/user');
// 导入响应数据模型
const { SuccessModel, ErrorModel } = require('../../model/resModel');

module.exports = async(req, res) => {

    const userId = req.params.id;
    // console.log(userId);

    // 接受客户端传递过来的搜索关键字、当前页码和每页显示的数据条数
    let { query, pagenum, pagesize } = req.query;
    // console.log(req.query);

    // 曲谱数据总数
    let total = await Staff.find({ author: userId }).count();

    // 总页数，向上取整
    let totalpage = Math.ceil(total / pagesize);

    // 数据开始查询的位置
    let start = (pagenum - 1) * pagesize;

    // 根据id查询曲谱信息
    let staffs = await Staff.find({ author: userId }).sort({ publishDate: -1 }).populate('author').limit(pagesize - 0).skip(start); // console.log(staff);

    if (staffs) {
        res.send({ totalpage: totalpage, pagenum: pagenum, total: total, staffs: staffs, message: '获取用户曲谱数据成功', code: 1 });
    } else {
        res.send(new ErrorModel('查询用户曲谱失败'));
    }
}