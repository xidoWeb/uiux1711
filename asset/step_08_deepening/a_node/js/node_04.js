// node_04.js
// file system - readFile 기능

var fs = require('fs');
// file system 모듈에는 여러가지 메소드가 존재한다.
// readFile(), writeFile(), watchFile() 등의 기능이 존재
// 모듈 내부의 함수기능이고, 메소드로 처리됨.
/* //*비동기 처리방식
console.log('fs 시작 ------------------- ');

// fs.readFile() 형식으로 작성
// 모듈.메소드(기능, 실행);
fs.readFile('data/user.json', function(err, data) {
  console.log('data: ' + data);
});

console.log('fs 끝 ------------------- ');
*/
// 동기 처리방식
console.log('문서 시작 --------------------- ');
var random = fs.readFileSync('data/randomText.txt');
var user   = fs.readFileSync('data/user.json');
console.log('txt: ' + random);
console.log(' ------------------------------ ');
console.log('json: ' + user);
console.log('문서 끝 --------------------- ');


// fs.writeFile()
// fs.watchFile()
