// rwd_02.js
(function($) {
// 각 영역에따른 함수이름 지정
// var Basic = function() {};  //IE 기준으로 동작되게 처리!
/* var Device = function(){
  var Mob    = function() { };
  var TabV   = function() { };
  var TabPc  = function() { };
  var PcFull = function() { };

   var deviceVal = {
     Mob    : Mob(),
     TabV   : TabV(),
     TabPc  : TabPc(),
     PcFull : PcFull()
   };
   return deviceVal;
 }; */
  var Mob    = function() { 
    var menuBtn = $('.menu_btn');
    menuBtn.on('click',function(e) {
      e.preventDefault();
      var gnb = $('#gnb');
      var gnbView = gnb.hasClass('view'); 
       if(gnbView){
        gnb.removeClass('view');
       }else{
        gnb.addClass('view');
       }
      // $('#gnb').toggleClass('view');
    });
  };
  var TabV   = function() { };
  var TabPc  = function() { };
  var PcFull = function() { };
// ------------------------------------------------------------------------
// 반응형웹 사이즈 고려한 기준 작업 설정하기
 var Rwd = function() {
  var winW = $(window).width();
  var rwdSize = [480, 768, 1366];  
    if(winW <= rwdSize[0]){ 
      Mob();  // 각영역 기능 함수로 호출 Mob();
    }else if(rwdSize[0] < winW && winW < rwdSize[1]){ 
      TabV();  // 각영역 기능 함수로 호출 TabV();
    }else if(rwdSize[1] <= winW && winW <= rwdSize[2]){ 
      TabPc();  // 각영역 기능 함수로 호출 TabPc();
    }else{ 
      PcFull();  // 각영역 기능 함수로 호출 PcFull();
    }
 }; // Rwd
 Rwd();
//  ------------------------------------------
// 브라우저 가로사이즈 변경시 정해진 함수 재실행
 var $w = $(window).width();
 $(window).on('resize',function() {
  var $nw = $(window).width();
  if($w !== $nw){
    location.reload();
    // Rwd();
  }
 });
// ----------------------------------------


})(this.jQuery);