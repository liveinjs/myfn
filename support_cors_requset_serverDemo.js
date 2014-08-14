// support CORS  request server
//http://www.w3.org/TR/cors/
/*
Access-Control-Allow-Origin: <origin> | * // 授权的源控制
Access-Control-Max-Age: <delta-seconds> // 授权的时间
Access-Control-Allow-Credentials: true | false // 控制是否开启与Ajax的Cookie提交方式
Access-Control-Allow-Methods: <method>[, <method>]* // 允许请求的HTTP Method
Access-Control-Allow-Headers: <field-name>[, <field-name>]* // 控制哪些header能发送真正的请求
*/

var http = require('http');

    http.createServer(function(req,res){
        var origin = req.headers.origin;
        var headers = req.headers['access-control-request-headers'];
        var method = req.headers['access-control-request-method'];

        if( typeof origin !== 'undefined') {
            //设置允许的请求源
            res.setHeader('Access-Control-Allow-Origin', origin || '*');
            //设置授权时间
            res.setHeader('Access-Control-Max-Age',(60*60*240).toString());
        }

       if(headers) res.setHeader('Access-Control-Allow-Headers',headers);

       if(method) res.setHeader('Access-control-Allow-Methods',method);

        //OPTIONS 方法安全问题
        if(req.method === 'OPTIONS'){
            res.statusCode = 204;
            return true;
        }

    res.end("{hello:world}");
}).listen(80);

