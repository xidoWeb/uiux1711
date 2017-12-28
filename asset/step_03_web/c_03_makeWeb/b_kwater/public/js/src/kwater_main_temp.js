// kwater_main_temp.js
(function($) {
// 기본 주소 연결
var baseUrl = './src/';

// 연결할 html 문서 
// var divWrap = ['headBox','bannerBox','lnbBox','contentBox','footBox'];
// var tempFile = ['headBox.html','bannerBox.html','lnbBox.html','contentBox.html','footBox.html'];

var myHtml = [
              {make:'headBox',    load:'all/headBox.html'},
              {make:'bannerBox',  load:'main/bannerBox.html'},
              {make:'lnbBox',     load:'main/lnbBox.html'},
              {make:'contentBox', load:'main/contentBox.html'},
              {make:'footBox',    load:'all/footBox.html'}              
              ];
// 함수 ImportFile() 실행
 // ImportFile(makeDivName, linkFile, wrapColorBoolean);
 // ImportFile(divWrap[0], tempFile[0], true);

  // ImportFile(myHtml[0].make, myHtml[0].load);
  // ImportFile(myHtml[1].make, myHtml[1].load);
  // ImportFile(myHtml[2].make, myHtml[2].load);
  // ImportFile(myHtml[3].make, myHtml[3].load);
  // ImportFile(myHtml[4].make, myHtml[4].load);
for(var i = 0; i < myHtml.length; i++){
  ImportFile(myHtml[i].make, baseUrl + myHtml[i].load, true);
}

})(this.jQuery);

