// js_05_tabMenu_01.js
(function($) {
  $('dd').eq(0).addClass('view');
  var dt = $('dt');
  dt.on('click',function() {
    $(this).next('dd').addClass('view');
    $(this).next('dd').siblings('dd').removeClass('view');
  });


})(this.jQuery);