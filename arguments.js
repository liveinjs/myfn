/**
 * arguments 作用于最接近它的函数
 * @returns {b}
 */

function a(){
    console.log(arguments);
    function b(){
        console.log(arguments);
    }
    return b;
}

a('x')('y');
