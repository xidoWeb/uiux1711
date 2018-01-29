// js_08_onepageScroll_01.js

(function($) {
  var nav = $('#nav');
  var navLi = nav.find('li');
  var timed = 800;

  navLi.on('click', ['a'], function(e) {
    e.preventDefault();
    var _thisAttr = $(this).find('a').attr('href');
    console.log(_thisAttr);
    var offsetTest = $(_thisAttr).offset().top;
    console.log(offsetTest);
    $('html, body').stop().animate({scrollTop:offsetTest});
  });
})(this.jQuery);