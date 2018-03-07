// loadingPlugin.js
$.fn.loading = function(option) {
  var set = $.extend({timed:800},option);
  setTimeout(function() { //실제 배포시 삭제할 라인
    return this.fadeOut(set.timed/4, function() {
      $(this).removeAttr('style').removeClass('loading');
    });
  },set.timed*3); //실제 배포시 삭제할 라인
}