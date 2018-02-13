// slide_banner_01.js
(function($) {
  /* banner 1번째 항목 기능 ================================== */

  var banner1 = $('#bannerBox');
  var oneWrap = banner1.find('.banner_wrap');
  var oneList = oneWrap.children('li');
  var oneBtn  = banner1.find('button');
  var lbtn    = $('.lbtn');
  var rbtn    = $('.rbtn');

  var oneHeight = oneWrap.outerHeight();

  //* 1. banner1 내부의 링크기능을 해제(tabindex="-1");

  // oneList.children('a').attr('tabindex', '-1');
  // oneList.eq(0).children('a').removeAttr('tabindex');
  
  $.each(oneList,function(index, value) {  $(this).children('a').attr('tabindex', '-1');  });
  oneList.eq(0).children('a').removeAttr('tabindex');

  var bannerMv = 0, eqi = 0;
   lbtn.hide(); // 첫번째 버튼숨김

  oneBtn.on('focus',function() {
    $(this).addClass('focus');
    $(this).siblings().removeClass('focus');
  }); 

  oneBtn.on('click',function(e) {
    e.preventDefault();
    var _this     = $(this);
    var oneMargin = parseInt(oneWrap.css('marginTop'));
    var oneCut    = oneHeight / oneList.length;

    oneBtn.hide(); // 클릭시 버튼모두 숨김

    // 왼쪽버튼을 클릭할 수 있는 상황
    if(_this[0] == lbtn[0] &&  oneMargin < 0 ){
       //첫이미지위로 올가는것을 방지
      // (-oneMargin < 0) ? bannerMv = 0  : bannerMv += oneCut; 
      // bannerMv += oneCut;
      eqi--;
    }else if(_this[0] == rbtn[0]){
      // (-oneMargin > oneCut*4) ? bannerMv = -oneCut*4 : bannerMv -= oneCut; 
      // bannerMv -= oneCut;
      eqi++;
    }
    bannerMv = -oneCut * eqi;
    // console.log(-bannerMv, oneCut*4);
    oneWrap.stop().animate({marginTop:bannerMv},function() {
      // 버튼이 모두 나타나게만들기
      // oneBtn.show();
      // 한쪽에서 버튼이 사라지게 만들기
      if(-bannerMv <= 0)             { lbtn.hide(); rbtn.show(); 
      }else if(-bannerMv >= oneCut*(oneList.length-1) ){ rbtn.hide(); lbtn.show();  
      }else                          { lbtn.show(); rbtn.show();  }

      $('.focus').focus();
      // console.log(eqi);
      oneList.eq(eqi).children('a').attr('tabindex', '0');
      oneList.eq(eqi).siblings('li').children('a').attr('tabindex', '-1');
    });
  });
// ----------------------------------------------------------------------------------
/* banner 2번째 항목 기능 ================================== */

var twoBanner   = $('#bannerBox_02');
var twoIndi     = twoBanner.children('.indicator');
var twoIndiList = twoIndi.children('li');
var twoWrap     = twoBanner.children('.banner_wrap');
var twoWrapList = twoWrap.children('li');
/*//2-1
  twoWrap.wrap($('<div>',{class:'banner_more_wrap'}));
  // twoWrap.wrap('<div class="banner_more_wrap"></div>');
  var twoWrapH    = twoWrap.outerHeight();
  $('.banner_more_wrap').css({overflow:'hidden', height:twoWrapH});

  twoIndiList.on('click',['a'],function(e) {
    e.preventDefault();
    var _thisI = $(this).index();
    twoIndiList.eq(_thisI).addClass('active');
    twoIndiList.eq(_thisI).siblings().removeClass('active');

    twoWrap.animate({marginTop: -twoWrapH * _thisI});
  });
*/
/* -------------------------------------- */
// 두번째 배너를 동일한 위치에서 fadeOut기능으로 만들어 보자!
twoWrapList.css({position:'absolute', top:0, left:0});
twoWrapList.parent().css({position:'relative'});
var i = twoWrapList.length;
var j = 0;
for(; j < i; j++){
  twoWrapList.eq(j).css({zIndex:(i-j)*100});
}

twoIndi.css({zIndex:(i+1)*100});

twoIndiList.on('click',function(e) {
  e.preventDefault();
  var _thisI = $(this).index();
  twoWrapList.eq(_thisI).prevAll().fadeOut();
  twoWrapList.eq(_thisI).next().fadeIn();
});



})(this.jQuery);