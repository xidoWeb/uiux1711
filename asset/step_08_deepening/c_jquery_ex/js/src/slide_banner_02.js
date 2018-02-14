// slide_banner_02.js
(function($) {
  /* 
  //  step1 ----------------------------------------------- */
  // 1. tabindex
  // 2. 인디케이터 클릭시 처리
  // 3. 좌우 버튼을 클릭
  // 4. 자동슬라이드기능( setInterval(), clearInterval() )
// ----------------------------------------------------------

  var bannerBox  =  $('#bannerBox');
// banner이미지 영역 
  var bannerWrap =  bannerBox.find('.banner_wrap');
  var bannerLi   =  bannerWrap.find('li');
// 인디케이트 영역
  var indi       = bannerBox.find('.indicator');
  var indiLi     = indi.find('li');

// - tabindex 제거(처음건 사용)
  bannerLi.find('a').attr('tabindex', '-1');
  bannerLi.find('a').eq(0).attr('tabindex', '0');

// - 1. 인디케이터 클릭시 fade효과
// .첫인디케이트, (.focus)
  indiLi.eq(0).addClass('focus');

  indiLi.on('click', ['a'], function(e) {
    e.preventDefault();
    var _this = $(this);
    var _thisI = _this.index();

    indiLi.removeClass('focus');
    indiLi.eq(_thisI).addClass('focus');

    bannerLi.eq(_thisI).prevAll().fadeOut();
    bannerLi.eq(_thisI).fadeIn();
    bannerLi.eq(_thisI).nextAll().fadeIn();

    bannerLi.find('a').attr('tabindex', '-1');
    bannerLi.find('a').eq(_thisI).attr('tabindex', '0');
  });

// - 선택의 index값을 가져와서 해당 배너의 링크를 tabindex를 0으로 변경

// - 2. 좌,우 버튼을 클릭시 배너의 내용이 나타나게 만들기
// - indicator 위치까지 변경(.focus)
// - 처음과, 마지막위치에서 어떻게 할것인가?

// 자동 슬라이드 기능처리




})(this.jQuery);