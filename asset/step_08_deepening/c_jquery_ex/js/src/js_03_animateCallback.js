// js_03_animateCallback.js
(function($) {
  var btn = $('.btn').children('button');
  // console.log(btn);
  var color1 = ['#fff', '#f06', '#f80', '#ff0', '#5f3', '#0ac', '#74a', '#a7a'];
  var color2 = ['#a7a', '#74a', '#0ac', '#5f3', '#ff0', '#f80', '#f06', '#fff'];

  var parFirst = $('.par').children('p').first();
  var parLast = $('.par').children('p').last();

  var timed = 800;
  var turn = 0;
  // console.log(parFirst);
  // console.log(parlast);

  // 1.배경색:파랑, 2.글씨색:흰색
  // btn.eq(0).on('click',function(e) {
  //   e.preventDefault();
  //   // parFirst.css({backgroundColor:'#07c', color:'#fff', transition:'all 500ms'});
  //   // parFirst.animate({backgroundColor:'#07c', color:'#fff'});
  //   parFirst.animate({backgroundColor:'#07c'}, timed/2, function() {
  //     parFirst.animate({color:'#fff'}, timed);
  //   });
  // });
// step.2
  btn.on('click',function(e) {
    e.preventDefault();
    var _thisI = $(this).index();
    console.log(_thisI);
    // first p --------------------------------
    parFirst.animate({backgroundColor:color1[_thisI]}, timed/2, function() {
      parFirst.animate({color:color2[_thisI]}, timed);
    });

    // last p ---------------------------------
    parLast.stop().animate({backgroundColor:color2[_thisI]},timed, function(){
      parLast.stop().animate({color:color1[_thisI]},timed, function() {
        var size = (_thisI + 1) * 16;
        console.log('size: '+ size);
        parLast.stop().animate({borderRadius:size + 'px'},timed, function() {
          turn += 180;
          parLast.css({transform:'rotateY(' + turn + 'deg)', transition:'all '+ timed +'ms ease'});
        });
      });
    });
  }); // btn.on('click')

// 새로고침버튼 ( reload() )
var reload = $('.reset').find('button');
reload.on('click',function(e) {
  e.preventDefault();
  window.location.reload()
});


})(this.jQuery);