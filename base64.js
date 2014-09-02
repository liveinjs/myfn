/**
 * base64 编解码
 */
function enbase64(buf){
    return buf.toString('base64');
}

function debase64(str){
    return new Buffer(str,'base64').toString();
}
exports.base64 = {
    en:enbase64,
    de:debase64
}
