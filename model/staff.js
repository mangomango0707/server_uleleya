// 创建曲谱集合
// 引入mongoose模块
const mongoose = require('mongoose');

// 创建曲谱集合规则
const staffSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 200,
        minlength: 1,
        required: [true, '请填写曲谱标题']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, '请传递作者']
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    pic: {
        type: String,
        default: null
    },
    content: {
        type: String
    },
    // 曲谱：staff
    // 教学视频：study
    type: {
        type: String,
        default: '曲谱'
    },
    // 标签：弹唱 指弹 民谣 流行 古风
    tag: {
        type: String,
        default: '弹唱'
    }
});

// 创建曲谱集合
const Staff = mongoose.model('Staff', staffSchema);

async function createStaff() {
    const staff = await Staff.create({
        title: '测试曲谱1',
        author: '5f2ba1610b172f5d30399818',
        content: '测试曲谱1'
    }).then(() => {
        console.log('曲谱创建成功')
    }).catch(() => {
        console.log('曲谱创建失败')
    });
}
console.log("1");
createStaff();
console.log("2");

// const staff = new Staff({
//     title: '测试曲谱1',
//     author: '5f2ba1610b172f5d30399818',
//     content: '测试曲谱1'
// });

// staff.save();


// 将文章集合规则作为模块成员导出
module.exports = {
    Staff: Staff
}