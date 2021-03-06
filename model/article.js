// 创建文章集合
// 引入mongoose模块
const mongoose = require('mongoose');

// 创建文章集合规则
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 200,
        minlength: 1,
        required: [true, '请填写文章标题']
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

// 创建文章集合
const Article = mongoose.model('Article', articleSchema);

// async function createArticle() {
//     const article = await Article.create({
//         title: '测试1',
//         author: '5f2ba1610b172f5d30399818',
//         content: '测试1'
//     });
// }

// createArticle();



// 将文章集合规则作为模块成员导出
module.exports = {
    Article: Article
}