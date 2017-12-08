//  jquery_base_method_04.js
(function($) {
// jquery start ----------------------------------

  var ani = $('.ani');

// 버튼 설정
  var aniBtn = $('#aniBtn');
  var btn_01 = aniBtn.children('button').eq(0);
  var btn_02 = aniBtn.children('button').eq(1);
  var btn_03 = aniBtn.children('button').eq(2);
  var btn_04 = aniBtn.children('button').eq(3);


btn_01.on('click', function(e) {
  e.preventDefault();

  // ani.css({backgroundColor:'#afa',color:'#555'});
  ani.animate({backgroundColor:'#afa',color:'#555'});
});

btn_02.on('click',function(e){
  e.preventDefault();
  // ani.css({marginLeft:'+=50px', transform:'rotate(180deg)'});
  ani.animate({marginLeft:'+=50px'},1000,'easeOutElastic');
});
btn_02.on('mouseleave',function() {

  // ani.css({marginLeft:0});
  ani.animate({marginLeft:0});
});

btn_03.on('click',function(e) {
  e.preventDefault();
  ani.stop().animate({right:0},function(){
    ani.animate({bottom:0},function(){
      ani.animate({left:0},function(){
        ani.animate({top:0},function(){
          ani.removeAttr('style');
        });
      });
    });
  });
});

btn_04.on('click',function(event) {
  event.preventDefault();

  ani.animate({width:'+=100px', height:'+=100px'}, 300, 'easeOutBounce',function(){
    var aniW = ani.width();
    console.log(aniW);
    if(aniW >= 500){
      alert('stop!!!');
    }
  });
});
// jquery end ----------------------------------
})(this.jQuery);