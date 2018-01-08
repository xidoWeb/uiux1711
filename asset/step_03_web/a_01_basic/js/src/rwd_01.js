// rwd_01.js
(function($) {

  // $('#headBox').css({'backgroundColor':'#aff'});

  // max480
  // max767
  // max1366
  // min1367~
  var rwd = function(){
    var rwdW = parseInt($(window).width());
    var mob = 480;
    var tab= 768;
    var pc = 1366;
    if(rwdW <= mob){
      $('#headBox').css({'backgroundColor':'#aff'});
      $('#bannerBox').css({'backgroundColor':'#9a0','borderBottom':'1px solid #333'});
      $('#contentBox').css({'backgroundColor':'#9a0','borderBottom':'1px solid #333'});
      $('#footBox').css({'backgroundColor':'#9a0','borderBottom':'1px solid #333'});
    }else if(mob < rwdW && rwdW < tab){
      $('#headBox').css({'backgroundColor':'#a4f'});
      $('#bannerBox').css({'backgroundColor':'#a90','borderBottom':'1px solid #333'});
      $('#contentBox').css({'backgroundColor':'#a90','borderBottom':'1px solid #333'});
      $('#footBox').css({'backgroundColor':'#a90','borderBottom':'1px solid #333'});
    }else if(tab <= rwdW && rwdW <= pc){
      $('#headBox').css({'backgroundColor':'#677'});
      $('#bannerBox').css({'backgroundColor':'#0af','borderBottom':'1px solid #333'});
      $('#contentBox').css({'backgroundColor':'#0af','borderBottom':'1px solid #333'});
      $('#footBox').css({'backgroundColor':'#0af','borderBottom':'1px solid #333'});
    }else{
      $('#headBox').css({'backgroundColor':'#afd'});
      $('#bannerBox').css({'backgroundColor':'#ccc','borderBottom':'1px solid #333'});
      $('#contentBox').css({'backgroundColor':'#aaa','borderBottom':'1px solid #333'});
      $('#footBox').css({'backgroundColor':'#ddd','borderBottom':'1px solid #333'});
    }
  };
rwd();

// parseInt()  주어진값을 정수형 숫자로 변환처리
// 예:  40px  -> parseInt(40px)  -> 40
// 예2: 43.3  -> parseInt(43.3)  -> 43

  var $w = parseInt($(window).width());
  $(window).on('resize',function(){
    var nowW = parseInt($(window).width());
    if($w !== nowW){
      // location.reload();
      rwd();
    }
  });


})(this.jQuery);