const filePathSource = "./source/index.html";
const filePathPublic = "./public";

const {src, dest} = require('gulp');

const html = function (callBack) {
    // console.log('Обработка html!');
    return src(filePathSource)
    .pipe(dest(filePathPublic));
    // callBack();
}

exports.html = html;