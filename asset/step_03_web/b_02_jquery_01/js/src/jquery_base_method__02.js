//  jquery_base_method__02.js
(function($){
// jQuery Start
  var gnbBtn = $('.gnb_btn');
  var gnbUl = $('#gnb').children('ul');

  gnbBtn.on('click', function(evt){
    evt.preventDefault();
    // gnbUl.toggle();
    gnbUl.slideToggle();
    // gnbUl.fadeToggle();
  });
  // ----------------------------------------

var view = $('.view');
// var v1 = view.chilren('li:nth-child(1)');
// var v1 = view.chilren('li:nth(1)');
// var v1 = view.chilren('li:eq(0)');
var v01 = view.children('li').eq(0);
var v02 = view.children('li').eq(1);
var v03 = view.children('li').eq(2);
var v04 = view.children('li').eq(3);
var v05 = view.children('li').eq(4);
var v06 = view.children('li').eq(5);
var v07 = view.children('li').eq(6);
var v08 = view.children('li').eq(7);

var btn = $('.btn');
var btnLi = btn.children('li');
var b01 = btnLi.eq(0);
var b02 = btnLi.eq(1);
var b03 = btnLi.eq(2);
var b04 = btnLi.eq(3);
var b05 = btnLi.eq(4);
var b06 = btnLi.eq(5);
var b07 = btnLi.eq(6);
var b08 = btnLi.eq(7);
var b09 = btnLi.eq(8);
var b10 = btnLi.eq(9);
var b11 = btnLi.eq(10);
var b12 = btnLi.eq(11);

// -------------------------------------
b01.on('click',['button'], function(evt){
  evt.preventDefault();
  v01.hide();
});
b02.on('click', function(evt){
  evt.preventDefault();
  v01.show();
});
// -------------------------------------
b03.on('click', function(evt){
  evt.preventDefault();
  v02.fadeOut();
});
b04.on('click', function(evt){
  evt.preventDefault();
  v02.fadeIn();
});
// -------------------------------------
b05.on('click', function(evt){
  evt.preventDefault();
  v03.slideUp();
});
b06.on('click', function(evt){
  evt.preventDefault();
  v03.slideDown();
});
// -------------------------------------
b07.on('click', function(evt){
  evt.preventDefault();
  v04.addClass('myView');
});
b08.on('click', function(evt){
  evt.preventDefault();
  v04.removeClass('myView');
});
// -------------------------------------
b09.on('click', function(evt){
  evt.preventDefault();
  v05.toggle();
});
b10.on('click', function(evt){
  evt.preventDefault();
  v06.fadeToggle();
});
b11.on('click', function(evt){
  evt.preventDefault();
  v07.slideToggle();
});
b12.on('click', function(evt){
  evt.preventDefault();
  v08.toggleClass('myView');
});
// - jQuery End
})(this.jQuery);