//process.nextTick(）将在下一轮事件循环中调用
// process.nextTick(function(){
//     console.log('nextTick callback');
// })
// console.log('nextTick was set!');
// if (typeof(window) === 'undefined') {
//     console.log('node.js');
// } else {
//     console.log('browser');
// }
'use strict'

//导入http模块
var http=require('http');

//创建http server,并传入回调函数
var server =http.createServer(function(request,response){

    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    console.log(request.method+':'+request.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    response.writeHead(200,{'contentType':'text/html'});
    // 将HTTP响应的HTML内容写入response:
    response.end('<h1>Hello Darling</h1>');
});
// 让服务器监听8080端口:
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');
