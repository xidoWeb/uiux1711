// loadingPlugin.js
$.fn.loading = function(option) {

  var set = $.extend({timed:800},option);

  return this.fadeOut(set.timed, function() {
    $(this).removeAttr('style').removeClass('loading');
  });

};