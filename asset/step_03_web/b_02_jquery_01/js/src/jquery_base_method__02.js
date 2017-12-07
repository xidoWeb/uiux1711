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





// - jQuery End
})(this.jQuery);