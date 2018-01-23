// js_04_accordionV2.js

(function($){

  var accDt = $('.accordion').find('dt');

    // 1번 기능시 주석풀기
    // $('dd').show(); 

    // 2번 기능시 주석풀기
    $('dd').hide(); 

  accDt.on('click',['button'], function(e) {
    e.preventDefault();
    var _this = $(this);
    // 1. 선택된 바로 뒤의 dd를 사라지게 만들기
    // _this.next('dd').animate({height:0, paddingTop:0, paddingBottom:0}, function(){
    //   var _$this = $(this);
    //   _$this.css({display:'none'});
    // });

    // 2. 선택된 바로뒤의 dd를 나타나게 만들기
    // _this.next('dd').css({display:'block', paddingTop:0, paddingBottom:0, height:0});
    // _this.next('dd').animate({paddingTop:'2rem', paddingBottom:'2rem'},function(){
    //   var _$this = $(this);
    //   _$this.attr({'style':'height:auto'});
    // });

  });


})(this.jQuery);