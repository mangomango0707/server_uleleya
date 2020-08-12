// 创建文章集合
// 引入mongoose模块
const mongoose = require('mongoose');

// 创建文章集合规则
const studyArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 200,
        minlength: 2,
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
    }
});

// 创建文章集合
const StudyArticle = mongoose.model('StudyArticle', studyArticleSchema);

async function createStudyArticle() {
    const StudyArticle = await StudyArticle.create({
        title: '测试11',
        author: '5f2ba1610b172f5d30399818',
        content: '测试11'
    });
}

createStudyArticle();



// 将文章集合规则作为模块成员导出
module.exports = {
    StudyArticle: StudyArticle
}