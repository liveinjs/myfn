/**
 * @description 精确计算工具
 * @param num1,数字1
 * @param num2,数字2
 * @param operation(num1,num2,m), 要进行的操作 ,本函数有三个参数分别为操作数1，操作数2，m
 * @author liveinjs 2014
 * @demo  tool(1.1, 1.2, add)
 */


var tool = module.exports = function (num1,num2,operation) {

    var getL = function(num) {
        if (Math.floor(num) === num) return 0;
        return  (num.toString().split('.'))[1].length;
    };

    var a1 = getL(num1),
        a2 = getL(num2),
        m = (a1 >= a2 ? Math.pow(10, a1) : Math.pow(10, a2));
    return operation.apply(this,[num1,num2,m]);
};



/*演示加法运算*/

var a = 1.111,b=.1;//声明操作数
var add = function (a, b,m) { //声明要进行的操作
      return (a * m + b * m)/m;
}

var result = tool(a,b,add);
console.log(result);
