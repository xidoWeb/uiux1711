// rwd_test.js
(function($) {

var originWinWidth = $(window).width();

// =======================================
  var gnb = $('#gnb');
  var menu = gnb.find('.menu');
  var gnb_nav = gnb.find('ul');


var mob = function(){
  menu.on('click',function(e) {
    e.preventDefault();
    gnb_nav.fadeToggle();
  });
};


var pc = function(){
  $('#headBox').css({backgroundColor:'#333'});
  gnb_nav.css({color:'#fff', fontWeight:'bold'});
  menu.hide();
};
// =======================================
var responsiveWeb = function() {
  if(originWinWidth < 960){
    mob();
  }else if(originWinWidth > 960){
    pc();
  }
};

responsiveWeb();


// =======================================

// ---------------------------------------------
  
  $(window).on('resize',function() {
    var resizeWinWidth = $(this).width();
    var re = originWinWidth !== resizeWinWidth;

    if(re){ location.reload(); }
    // responsiveWeb();

  });


// ---------------------------------------------



})(jQuery);