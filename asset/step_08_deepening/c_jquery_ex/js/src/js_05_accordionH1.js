// js_05_accordionH1.js
(function($) {
  // 1. show(), hide() method 이용
  // keyboard focus 기능도 같이 처리


  var bannerDt = $('#bannerBox').find('dt');
  var myfocus = 'focus'; // addClass이름을 줄때의 값을 넣으면된다.

  bannerDt.eq(0).addClass(myfocus);

/* // step_01
  var myFocus = function(){
    $('.focus').next('dd').siblings('dd').hide();
    $('.focus').next('dd').show();
  };
  myFocus();
*/
var banner = $('#bannerBox');
var bannerDd = banner.find('dd');
var bannerBlink = [
                parseInt(bannerDd.css('paddingLeft')),
                parseInt(bannerDd.css('paddingRight')),
                parseInt(bannerDd.css('width'))
                  ];
// console.log(bannerBlink); // 검증

var myShow = function(result){
  var focusNext = $('.' + result).next('dd');
  var focusSiblings = focusNext.siblings('dd');

  focusSiblings.find('.shot').stop().fadeOut(100,function(){
     focusSiblings.stop().animate({width:0, paddingLeft:0, paddingRight:0},function(){
      focusSiblings.css({display:'none'});
    });
  });

  focusNext.css({display:'block'});
  focusNext.stop().animate({paddingLeft:bannerBlink[0], 
                     paddingRight:bannerBlink[1], 
                     width:bannerBlink[2]}, function(){
    focusNext.find('.shot').fadeIn();
  });
}; // myShow();
myShow(myfocus);

// dt에 키보드 포커스가 잡히면
  bannerDt.find('a').on('focus', function(e){
    e.preventDefault();
    var _this = $(this).parent();
    _this.siblings('dt').removeClass('focus');
    _this.addClass('focus');
    // myFocus();  // step1기능
    myShow(myfocus); // step2기능
  });

})(this.jQuery);