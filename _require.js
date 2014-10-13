/*
功能: 不缓存 模块文件
修改 Module 类

给Module 原型属性 追加_require 方法，
这样所有的Module对象自动拥有 `_require` 方法

 */

// var Moudle = module.constructor; 与以下两行代码效果相同
var m = require('module');
var Module = m.Module;

Module.prototype._require = function(request) {
    var res = this.require(request);

    var filename = Module._resolveFilename(request,this);
    delete Module._cache[filename];

    return res;
};
