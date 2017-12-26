// server.js

var http = require('http');
var fs = require('fs'); //file system
var url = './html/';
var protocol = 8880;

    console.log('서버가 구현되었습니다.');
    console.log('http://localhost:'+protocol);
    console.log('위주소로 접속해 주세요.');

http.createServer(function(req, res){
  fs.readFile(url+'index.html', function(err, data){
    res.writeHead(200,{'content-Type' : 'text/html'}); 
    // 200 : 요청 성공
    // 400 : 서버, 파일에러  404
    // 500 : 서버
    res.write(data);
    res.end();
  });
}).listen(protocol);
