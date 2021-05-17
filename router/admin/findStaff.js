// 导入曲谱集合
const { Staff } = require('../../model/staff');
// 导入响应数据模型
const { SuccessModel, ErrorModel } = require('../../model/resModel');

module.exports = async(req, res) => {
    const id = req.params.id;
    // console.log(id);

    // 根据id查询曲谱信息
    let staff = await Staff.findOne({ _id: id }).populate('author');
    // console.log(staff);
    if (staff) {
        res.send(new SuccessModel(staff, '查询曲谱成功'));
    } else {
        res.send(new ErrorModel('查询曲谱失败'));
    }
}