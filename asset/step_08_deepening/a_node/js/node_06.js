// node_06.js
// fs.watchFile(); - file감지
// fs.watch(); - 폴더감지

var fs = require('fs');
fs.watch('css',function(event, filename) {
  console.log('문서가 수정되었습니다!!!!'+ event);
  if(filename){
    console.log('filename' + filename);
  }else{
    console.log('...!!!!!.....');
  }
});
