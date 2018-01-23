// js_04_accordionV2.js

(function($){

  // eq()
  // []
  // height(), innerHeight(), outerHeight(), outerHeight(true)
  // 


  var acc = $('.accordion');
  var accDt = acc.find('dt');
  var accDd = acc.find('dd');
  var ddHeight = [];
  var i = 0;
  // console.log(accDd.length);
  // ddHeight[0] = 100;
  // ddHeight[1] = 400;
  for (; i < accDd.length; i++) {  ddHeight[i] = accDd.eq(i).innerHeight();  }
  // console.log(ddHeight);

    // 1번 기능시 주석풀기
    // $('dd').show(); 

    // 2번 기능시 주석풀기
    $('dd').hide(); 
/* //1,2기능구현    
  accDt.on('click',['button'], function(e) {
    e.preventDefault();
    var _this = $(this);
    // var _thisI = $(this).index();
    var _thisI = $(this).index() / 2;
    // 1. 선택된 바로 뒤의 dd를 사라지게 만들기
    // _this.next('dd').animate({height:0, paddingTop:0, paddingBottom:0}, function(){
    //   var _$this = $(this);
    //   _$this.css({display:'none'});
    // });

    // 2. 선택된 바로뒤의 dd를 나타나게 만들기
    // console.log(_thisI);
    // _this.next('dd').css({display:'block', paddingTop:0, paddingBottom:0, height:0});
    // _this.next('dd').animate({paddingTop:'2rem', paddingBottom:'2rem', height:ddHeight[_thisI]});
  });
*/

  // 3. 1번,2번 기능을 함수처리하여 사용하기
  //1번기능 함수화처리
  var myHide = function(select){
    var _this = select;    var _thisI = select.index() / 2;
    // 1. 선택된 바로 뒤의 dd외 다른 dd를 사라지게 만들기
    _this.next('dd').siblings('dd').animate({height:0, paddingTop:0, paddingBottom:0}, function(){
      var _$this = $(this);
      _$this.css({display:'none'});
    });
  };
  // 2번기능을 함수화
  var myShow = function(select){
    // 2. 선택된 바로뒤의 dd를 나타나게 만들기
    var _this = select;    var _thisI = select.index() / 2;
    // console.log(_thisI);
    _this.next('dd').css({display:'block', paddingTop:0, paddingBottom:0, height:0});
      _this.next('dd').animate({paddingTop:'2rem', paddingBottom:'2rem', height:ddHeight[_thisI]});
  };
  // 선택된 다음 dd를 숨김처리하기위한 함수
  var mySelHide = function(select){
    var _this = select;    var _thisI = select.index() / 2;
     _this.next('dd').animate({height:0, paddingTop:0, paddingBottom:0}, function(){
       _this.next('dd').css({display:'none'});
    });
   }

  accDt.on('click',['button'], function(e) {
      e.preventDefault();      var sel = $(this);   

      var ddView = sel.next('dd').css('display') == 'block';

      if(ddView){
        mySelHide(sel);
      }else{
        myShow(sel);      
        myHide(sel);
      }  
  });
})(this.jQuery);