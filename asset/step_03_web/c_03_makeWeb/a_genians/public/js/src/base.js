(function($) {
  // jquery start ====================================

  var wrap = $('#wrap');
 
 // 불러올 파일 목록 만들기

 var baseUrl  = '../../html/src/';
 var loadFile = {headBox:baseUrl + 'headBox.html',
                 bannerBox:baseUrl + 'bannerBox.html',
                 footBox:baseUrl + 'footBox.html'};

  // headBox import
wrap.prepend('<div id="headBoxWrap"></div>');
  var headBoxWrap = $('#headBoxWrap');
  headBoxWrap.load(loadFile.headBox, function() {
    var headBox = $('#headBox');
    var headBoxBg = headBox.css('backgroundColor');
    console.log( headBox );
    headBoxWrap.css({'backgroundColor':headBoxBg});
  });

// bannerBox import
headBoxWrap.after('<div id="bannerBoxWrap"></div>');
var bannerBoxWrap = $('#bannerBoxWrap');
bannerBoxWrap.load(loadFile.bannerBox);

// aboutBox
// newsBox
// blogBox
// lnbBox
// footNavBox

// footbox import
    wrap.append('<div id="footBoxWrap"></div>');
var footBoxWrap = $('#footBoxWrap');

  footBoxWrap.load(loadFile.footBox, function() {
    var footBox = $('#footBox');
    var footBoxBg = footBox.css('backgroundColor');
    console.log( footBox );
    footBoxWrap.css({'backgroundColor':footBoxBg});
  });

  // jquery end ====================================
})(this.jQuery);