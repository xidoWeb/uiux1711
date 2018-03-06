// mousewheel_02.js
(function($) {
  var arr = [];
  var scrollView = $('.scroll_view');
  var i = 0;
  var sLength = scrollView.length;
  for(; i < sLength; i++){ arr[i] = scrollView.eq(i).offset().top; }
  console.log(arr);
  var body = $("html, body");
  body.stop().animate({scrollTop:0}, 500, 'swing');


  var viewEq = 0, delta = 0, nowScrollTop = 0;
  scrollView.on('mousewheel DOMMouseScroll',function(e) {
    var E = e.originalEvent;
    var _thisI = $(this).index()-1;
    var _thisTop = $(this).offset().top;

    var viewH = scrollView.first().height();
    var viewCut = viewH/10;

    // console.log(_thisI+'번째 위치');
    // console.log('위치값 현재: '+arr[_thisI], '위치값 다음: '+arr[_thisI+1]);
    // console.log('화면높이'+scrollView.first().height());
    // console.log('화면에서 이동위치'+ _thisTop);
    // console.log('scrollTop: '+ body.scrollTop() );
    if( body.is(':animated') ){ return; }
    // 스크롤 후에 높이값 파악하기(일정시간 뒤에 파악 300)    
    setTimeout(function() {  
      nowScrollTop = body.scrollTop();
      return nowScrollTop;
    }, 300);
    // console.log(nowScrollTop); // 현재스크롤 위치 파악
/* -----------------------------------------------------------
    // 현재위치에서 (_thisI),
    // 마우스 스크롤의 위치파악하고(nowScrollTop),
    // 해당 위치의 값의 기준 arr[_thisI] + 1/3 (viewCut) 지점의 위치를 넘어가지 못하면,
    // 원래 있던 위치로 이동 (arr[_thisI])
    // 해당하는 지점에서 1/3을 넘어가는 시점에서는 다음 위치로 이동(arr[_thisI+1])
// --------------------------------------------------------- */
    var baseCutScroll = arr[_thisI] + viewCut;
    var minusCutScroll = arr[_thisI] - viewCut;
    // console.log(baseCutScroll); // 해당 위치의 값의 기준 검증
    (E.detail) ? delta = E.detail * 40 : delta = -E.wheelDelta;  

    // 조건 비교
    var bodyAni = function(count) {
       body.stop().animate({scrollTop:arr[count]}, 500, 'swing');
     };

    setTimeout(function() {
      if(delta > 0){
        (nowScrollTop  < baseCutScroll) ? 
          /*body.stop().animate({scrollTop:arr[_thisI]}, 500, 'swing');*/  bodyAni(_thisI) : 
            /*body.stop().animate({scrollTop:arr[_thisI+1]}, 500, 'swing');*/  bodyAni(_thisI+1);
      }else{
        (nowScrollTop  > minusCutScroll) ? 
          /*body.stop().animate({scrollTop:arr[_thisI]}, 500, 'swing');*/  bodyAni(_thisI) : 
            /*body.stop().animate({scrollTop:arr[_thisI-1]}, 500, 'swing');*/  bodyAni(_thisI-1);
      }
    },400);


    // if(viewEq < 0){viewEq = 0;}else if(viewEq > sLength){viewEq = sLength;}
    // console.log(viewEq);
    // body.stop().animate({scrollTop:arr[viewEq]}, 500, 'swing');
  });

})(this.jQuery);