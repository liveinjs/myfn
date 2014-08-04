/**
 * @author liveinjs
 * @type {co}
 * @version 1.0
 * @description 返回一个绑定参数的函数
 */
exports = module.exports = function (fn){
    return fn.bind.apply(fn,arguments);
};
