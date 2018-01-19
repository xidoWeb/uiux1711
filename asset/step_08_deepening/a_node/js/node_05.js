//  node_05.js

// fs.writeFile() - 쓰기 기능

var fs = require('fs');

// var filename = __filename;
/* 
split('문자이름');
문자열의 경우 원하는 글자를 기준으로 배열로 나열하는 방법
*/
// var splitFile = filename.split('\\');
// var spName = splitFile[splitFile.length-1]; // 배열값 갯수파악해서 마지막 선택
// // console.log(splitFile);
// console.log(spName);

 
// console.log('start ------------- ');
 var cssFile = '#wrap {width:100%; height:auto; min-height:300px; background-color:#fa0; margin:0 auto;}';
// // 문서를 생성해서 위 cssFile 내용을 삽입

// fs.writeFile('css/test_01.css', '/* test_01.css */\n' + cssFile, function() {
//   console.log('문서작성을 완료했습니다.');
// });

// console.log('end ----------------');


console.log('start -----------------------');
var wfs = fs.writeFileSync('css/test_01.css', '/* test_01.css */\n' + cssFile);
console.log('wfs: '+ wfs);
console.log('end -----------------------');
