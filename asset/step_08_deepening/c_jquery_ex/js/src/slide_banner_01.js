// slide_banner_01.js
(function($) {
  // banner 첫번째 항목에대해...
  var banner1 = $('#bannerBox');
  var oneWrap = banner1.find('.banner_wrap');
  var oneList = oneWrap.children('li');
  var oneBtn  = banner1.find('button');
  var lbtn    = $('.lbtn');
  var rbtn    = $('.rbtn');

  var oneHeight = oneWrap.height();

  //* 1. banner1 내부의 링크기능을 해제(tabindex="-1");

  // oneList.children('a').attr('tabindex', '-1');
  // oneList.eq(0).children('a').removeAttr('tabindex');
  
  $.each(oneList,function(index, value) {  $(this).children('a').attr('tabindex', '-1');  });
  oneList.eq(0).children('a').removeAttr('tabindex');

  var bannerMv = 0;
   lbtn.hide();
  oneBtn.on('click',function(e) {
    e.preventDefault();
    var _this     = $(this);
    var oneMargin = parseInt(oneWrap.css('marginTop'));
    var oneCut    = oneHeight / 5;

    oneBtn.hide();

    if(_this[0] == lbtn[0] &&  oneMargin < 0 ){
      (-oneMargin < 0) ? bannerMv = 0  : bannerMv += oneCut; 
    }else if(_this[0] == rbtn[0]){
      (-oneMargin > oneCut*3) ? bannerMv = -oneCut*4 : bannerMv -= oneCut; 
    }
    // console.log(-bannerMv, oneCut*4);
    oneWrap.stop().animate({marginTop:bannerMv},function() {
      // 버튼이 모두 나타나게만들기
      // oneBtn.show();
      // 한쪽에서 버튼이 사라지게 만들기
      if(-bannerMv <= 0){
        lbtn.hide(); rbtn.show();
      }else if(-bannerMv >= oneCut*4){
        rbtn.hide(); lbtn.show(); 
      }else{
        lbtn.show(); rbtn.show();
      }
    });
  });


})(this.jQuery);