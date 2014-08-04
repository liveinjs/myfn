/**
 * Don't use `ab`. `ab` sends HTTP/1.0 in HTTP requests. This causes node to
 * close the connection after each request by sending a `Connection:close` in the response.
 * Adding `-k` for keep-alive to ab does not help.
 *
 * If you use `siege`, make sure to set connection = keep-alive in your .siegerc file.
 * If not, siege defaults to HTTP/1.0.
 *
 * @author liveinjs
 * @version 0.0.1
 */

var http = require('http');
http.globalAgent.maxSockets = Infinity;
var numCPUs = require('os').cpus().length;
var cluster = require('cluster');

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {

    http.createServer(function(req, res) {
        res.end("hello world!");
    }).listen(8080);
}
