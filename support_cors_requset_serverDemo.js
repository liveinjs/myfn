// support CORS  request server
var http = require('http');

    http.createServer(function(req,res){
        var origin = req.headers.origin;
        var headers = req.headers['access-control-request-headers'];
        var method = req.headers['access-control-request-method'];

        if( typeof origin !== 'undefined') {
            res.setHeader('Access-Control-Allow-Origin', origin || '*');
            res.setHeader('Access-Control-Max-Age',(60*60*240).toString());
        }

       if(headers) res.setHeader('Access-Control-Allow-Headers',headers);

       if(method) res.setHeader('Access-control-Allow-Method',method);

        //OPTIONS 方法安全问题
        if(req.method === 'OPTIONS'){
            res.statusCode = 204;
            return true;
        }

    res.end("{hello:world}");
}).listen(80);

