(function($) {
  // jquery start ====================================

  var wrap = $('#wrap');
  wrap.prepend('<div id="headBoxWrap"></div>');
  var headBoxWrap = $('#headBoxWrap');

  headBoxWrap.load('../../html/src/headBox.html', function() {
    var headBox = $('#headBox');
    var headBoxBg = headBox.css('backgroundColor');
    console.log( headBox );
    headBoxWrap.css({'backgroundColor':headBoxBg});
  });



  // jquery end ====================================
})(this.jQuery);