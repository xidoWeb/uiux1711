// slide_banner_02.js
(function($) {
  /* 
  // step 1 ----------------------------------------------- 
  //  1. tabindex
  //  2. 인디케이터 클릭시 처리
  //  3. 좌우 버튼을 클릭
  //  4. 자동슬라이드기능( setInterval(), clearInterval() )

  // step 2 ------------------------------------------
  //  1. banner 마지막부분 첫이미지 복제삽입( clone() )
  //  2. indicator 마지막부분 배너와 동일하게 처리( clone() ) 및, 마지막 요소 숨김
  //  3. 좌우 배너클릭시 이동처리(오른쪽 마지막에서는 처음으로, 처음에서는 마지막이동 후 다음행동 처리)
  */
// ----------------------------------------------------------
// 변수지정
  var bannerBox  = $('#bannerBox');
// banner이미지 영역 
  var bannerWrap = bannerBox.find('.banner_wrap');
  var bannerUl   = bannerWrap.children('ul');
  var bannerLi   = bannerUl.children('li');
// 인디케이트 영역
  var indi       = bannerBox.find('.indicator');
  var indiLi     = indi.find('li');
// 배너 및 인디케이트 첫요소 복제 후 마지막 요소로 이동
  var bannerClone = bannerLi.first().clone(true);
      bannerLi.last().after(bannerClone);
  var indiClone   = indiLi.first().clone(true);
      indiLi.last().after(indiClone);

// 변수내용 재설정
      bannerWrap = bannerBox.find('.banner_wrap');
      bannerUl   = bannerWrap.children('ul');
      bannerLi   = bannerUl.children('li');
// 인디케이트 영역
      indi       = bannerBox.find('.indicator');
      indiLi     = indi.find('li');
  var indiP      = indi.find('p');
  var indiNow    = indiP.find('.now');
  var indiTotal  = indiP.find('.total');
  var playBtn    = indi.find('button');
// 좌,우 버튼영역
  var btn        = bannerBox.find('.btn');
  var lbtn       = btn.find('.lbtn');
  var rbtn       = btn.find('.rbtn');
// 자동 슬라이드에 대한 변수지정
  var myAutoSlide, startSlide, stopSlide;
  var timed      = 3000;

// 가로형 슬라이드형태로 변경
bannerBox.css({overflow:'hidden'});
var bannerLiLength = bannerLi.length;
bannerUl.css({width:bannerLiLength*100+'%'});
var bannerW = bannerUl.innerWidth();

bannerLi.css({float:'left', width:bannerW/bannerLiLength});

// -----------------------------------------------------------
// - tabindex 제거(첫번째 배너의 링크는 tabindex를 0으로 처리하여 사용)
var myTab = function(i) {
  bannerLi.find('a').attr('tabindex', '-1');
  bannerLi.eq(i).find('a').attr('tabindex', '0');
};
myTab(0);

var myIndex = 0;
var bannerSlideI = function(i) {

  if(i < 0){ 
    i = bannerLi.length-1;
    bannerUl.stop().css({left:-i*100+'%'});
    i--; 
    bannerUl.stop().animate({left:-i*100+'%'});
    }else if(i >= bannerLi.length-1){
    i = 0;
    bannerUl.stop().animate({left:-(bannerLi.length-1)*100+'%'},function() {
      bannerUl.stop().css({left:0});
    });
  }else{
    bannerUl.stop().animate({left:-i*100+'%'});
  }
  // console.log(i);
  indiLi.removeClass('focus'); 
  var bannerIndex =  bannerLi.eq(i);
  indiLi.eq(i).addClass('focus');

  // myTab 함수 사용
  myTab(i);  indiNow.text(i+1);
  myIndex = i;
  return myIndex;
};

// indicator 배너갯수파악(배너숫자표기)
  indiNow.text('1');
  indiTotal.text(bannerLi.length-1);

// - 1. 인디케이터 클릭시 fade효과
// .첫인디케이트, (.focus)
  indiLi.eq(0).addClass('focus');
  indiLi.eq(-1).hide();

  indiLi.on('click', ['a'], function(e) {
    e.preventDefault();
    myIndex = $(this).index();
    bannerSlideI(myIndex);
  });

// - 2. 좌,우 버튼을 클릭시 배너의 내용이 나타나게 만들기
  btn.find('button').on('click',function(e) {
    // e.stopPropagation();
    e.preventDefault();
    var _this = $(this);
    (_this[0] == lbtn[0]) ? myIndex-- : myIndex++;
    bannerSlideI(myIndex);
  });

// 자동 슬라이드 배너처리
var startSlide = function() { myAutoSlide = setInterval(function() { rbtn.trigger('click');}, timed); };
var stopSlide = function() { clearInterval(myAutoSlide); };
startSlide();

// playBtn 상태를 확인하고, 재생버튼에대한 내용 처리
var btnStatus = function(has) {
  var _thisI = playBtn.find('i');
  var nowPause = has | false;
  console.log(nowPause);
  if(nowPause){
    _thisI.removeClass('fa-pause-circle');
    _thisI.addClass('fa-play-circle');
    stopSlide();
  }else{
    _thisI.addClass('fa-pause-circle');
    _thisI.removeClass('fa-play-circle');
    startSlide();
  }
};

// 플레이 버튼활용하기
// var playBtn = indi.find('button'); //상단에 적용된 상태
playBtn.on('click',['button'], function(e) {
  e.preventDefault();
  var nowPause = playBtn.find('i').hasClass('fa-pause-circle');
  btnStatus(nowPause);
});

bannerBox.on({'mouseenter': stopSlide, 'mouseleave':btnStatus});
bannerBox.find('a').on('focus',function() {stopSlide()});
bannerBox.find('button').on('focus',function() {stopSlide()});
bannerBox.find('a').eq(-1).on('blur',function() {startSlide()});



})(this.jQuery);
