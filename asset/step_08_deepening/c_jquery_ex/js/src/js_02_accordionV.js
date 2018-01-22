// js_02_accordionV.js

(function($){
  // $('dd').hide();

  // $(this)
  // slideDown(), slideUp()
  // next(), siblings()
  /* 선택자.on('click', function(){
      선택한것.바로뒤.보이기;
      선택한것의 형제중 동일요소.사라지기
  });
  */

  var accDt = $('.accordion').find('dt');

  accDt.on('click',['button'], function(e) {
    e.preventDefault();
    var _this = $(this);

    // console.log( _this.index() );
    _this.next('dd').siblings('dd').stop().slideUp();
    // _this.next('dd').stop().slideToggle();   // 이제 조건분기로 바꿔보자!

    // _this.next('dd') 의 display 상태확인(보이느냐 안보이느냐?)
    var ddView = _this.next('dd');
    var ddBlock = ddView.css('display') == 'block';

    if(!ddBlock){
    // 보이지 않으면 -> 나타나기!
      ddView.slideDown();
    }else{
    // 보이면 -> 숨기고
      ddView.slideUp();
    }

  });


})(this.jQuery);