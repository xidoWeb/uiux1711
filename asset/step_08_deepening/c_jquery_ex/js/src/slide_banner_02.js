// slide_banner_02.js
(function($) {
  /* 
  //  step1 ----------------------------------------------- */
  // 1. tabindex
  // 2. 인디케이터 클릭시 처리
  // 3. 좌우 버튼을 클릭
  // 4. 자동슬라이드기능( setInterval(), clearInterval() )
// ----------------------------------------------------------
// 변수지정
  var bannerBox  =  $('#bannerBox');
// banner이미지 영역 
  var bannerWrap =  bannerBox.find('.banner_wrap');
  var bannerLi   =  bannerWrap.find('li');
// 인디케이트 영역
  var indi       = bannerBox.find('.indicator');
  var indiLi     = indi.find('li');
  var indiP      = indi.find('p');
  var indiNow    = indiP.find('.now');
  var indiTotal  = indiP.find('.total');
// 좌,우 버튼영역
  var btn        = bannerBox.find('.btn');
  var lbtn       = btn.find('.lbtn');
  var rbtn       = btn.find('.rbtn');

// -----------------------------------------------------------
// - tabindex 제거(첫번째 배너의 링크는 tabindex를 0으로 처리하여 사용)
var myTab = function(i) {
  bannerLi.find('a').attr('tabindex', '-1');
  bannerLi.eq(i).find('a').attr('tabindex', '0');
};
myTab(0);

var myIndex = 0;
var bannerSlideI = function(i) {

  if(i < 0){ i = bannerLi.length-1}
  if(i >= bannerLi.length){i = 0}
  console.log(i);

  indiLi.removeClass('focus');  
  indiLi.eq(i).addClass('focus');
  bannerLi.eq(i).prevAll().fadeOut();
  bannerLi.eq(i).fadeIn();
  bannerLi.eq(i).nextAll().fadeIn();

  myTab(i);
  indiNow.text(i+1);

  myIndex = i;
  return myIndex;
};


// indicator 배너갯수파악(배너숫자표기)
  indiNow.text('1');
  indiTotal.text(bannerLi.length);

// - 1. 인디케이터 클릭시 fade효과
// .첫인디케이트, (.focus)
  indiLi.eq(0).addClass('focus');



  indiLi.on('click', ['a'], function(e) {
    e.preventDefault();
    var _this = $(this);
    myIndex = _this.index();
/* // 1차로 사용했던 흔적!!!
    indiLi.removeClass('focus');
    indiLi.eq(_thisI).addClass('focus');

    bannerLi.eq(_thisI).prevAll().fadeOut();
    bannerLi.eq(_thisI).fadeIn();
    bannerLi.eq(_thisI).nextAll().fadeIn();
    // 배너위치에 따른 tabindex 변경
    // - 선택의 index값을 가져와서 해당 배너의 링크를 tabindex를 0으로 변경
    // bannerLi.find('a').attr('tabindex', '-1');
    // bannerLi.find('a').eq(_thisI).attr('tabindex', '0');  
    // tabindex 함수로 처리
    myTab(_thisI);

    // 배너위치에 따른 배너숫자 변경
    indiNow.text(_thisI+1);
*/

    bannerSlideI(myIndex);
  });

// - 2. 좌,우 버튼을 클릭시 배너의 내용이 나타나게 만들기
  btn.find('button').on('click',function(e) {
    e.preventDefault();
    var _this = $(this);
    // if(_this[0] == lbtn[0]){ myIndex-- }else{ myIndex++; }
    (_this[0] == lbtn[0]) ? myIndex-- : myIndex++;
    // if(myIndex < 0){ myIndex = bannerLi.length-1}
    // if(myIndex >= bannerLi.length){myIndex = 0}

    // console.log(myIndex);
/*// 1차로 사용한 내용
    indiLi.removeClass('focus');
    indiLi.eq(myIndex).addClass('focus');

    bannerLi.eq(myIndex).prevAll().fadeOut();
    bannerLi.eq(myIndex).fadeIn();
    bannerLi.eq(myIndex).nextAll().fadeIn();
    // 배너위치에 따른 tabindex 변경
    myTab(myIndex);
    // 배너위치에 따른 배너숫자 변경
    indiNow.text(myIndex+1);
*/
    bannerSlideI(myIndex);
  });


// 자동 슬라이드 기능처리
/*
 setInterval() : 일정시간 마다!!!! 수행
 clearInterval() : setInterval() 메소드를 삭제하는 기능
 setTimeout() : 일정시간이 흐른뒤에 수행 ( delay()기능과 약~~~~간 비스무리하다!! )
*/




})(this.jQuery);