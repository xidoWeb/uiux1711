// js_05_accordionH3.js
(function($) {
  var li = $('li').find('a');
  li.on('focus',function() {
    $(this).addClass('focus');
    $(this).parent().css({zIndex:300});
  });

  li.on('blur', function() {
    $(this).removeClass('focus');
    $(this).parent().removeAttr('style');
  });

})(this.jQuery);