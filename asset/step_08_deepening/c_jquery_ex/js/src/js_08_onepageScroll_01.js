// js_08_onepageScroll_01.js

(function($) {

  var indi    = $('.indicator');
  var indiLi  = indi.find('li');
  var timed  = 800;

  var navTop = indi.offset().top;
  // console.log(navTop);


  indiLi.on('click', ['a'], function(e) {
    e.preventDefault();
    var _thisAttr = $(this).find('a').attr('href');
    console.log(_thisAttr);
    var offsetTest = $(_thisAttr).offset().top;
    console.log(offsetTest);
    $('html, body').stop().animate({scrollTop:offsetTest}, timed, 'easeOutBack');
  });
})(this.jQuery);