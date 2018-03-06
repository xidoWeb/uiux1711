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


  var viewEq = 0;
  var delta = 0;    
  scrollView.on('mousewheel DOMMouseScroll',function(e) {
    var E = e.originalEvent;
    var _thisI = $(this).index();
    var _thisTop = $(this).offset().top;

    console.log(_thisI+'번째 위치');
    console.log('위치값 현재: '+arr[_thisI], '위치값 다음: '+arr[_thisI+1]);
    console.log('화면높이'+scrollView.first().height());
    console.log('화면에서 이동위치'+ _thisTop);

    if( body.is(':animated') ){ return; } 

    (E.detail) ? delta = E.detail * 40 : delta = -E.wheelDelta; 
 
    (delta > 0) ? viewEq++:  viewEq--;
    // if(viewEq < 0){viewEq = 0;}else if(viewEq > sLength){viewEq = sLength;}
    // console.log(viewEq);
    // body.stop().animate({scrollTop:arr[viewEq]}, 500, 'swing');
  });

 scrollView.on('touchmove',function(e){ console.log(e); });


})(this.jQuery);