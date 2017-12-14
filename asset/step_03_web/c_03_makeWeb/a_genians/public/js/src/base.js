(function($) {
  // jquery start ====================================

// 각 기능을 요약해서 처리할 함수로 바꾸기
function ImportFile(select,file, backgroundIf) {
  select.load(file, function() {
    select.addClass('clearfix');
    var childrenBox = select.children();
    childrenBox.css({margin:'0 auto'});

    if(backgroundIf == true){
      var bgColor = childrenBox.css('backgroundColor');
      // console.log( 'select: ' + childrenBox, 'background: ' + bgColor );
      select.css({'backgroundColor':bgColor});
    }
  });
}

// -------------------------------------------------------
// validator : 
// -------------------------------------------------------

  var wrap = $('#wrap');
 
 // 불러올 파일 목록 만들기

 var baseUrl  = '../../html/src/';
 var loadFile = {headBox   : baseUrl + 'headBox.html',
                 bannerBox : baseUrl + 'bannerBox.html',
                 aboutBox  : baseUrl + 'aboutBox.html',
                 newsBox   : baseUrl + 'newsBox.html',
                 blogBox   : baseUrl + 'blogBox.html',
                 lnbBox    : baseUrl + 'lnbBox.html',
                 footNavBox: baseUrl + 'footNavBox.html',
                 footBox   : baseUrl + 'footBox.html'};

  // headBox import
wrap.prepend('<div id="headBoxWrap"></div>');
  var headBoxWrap = $('#headBoxWrap');
  // headBoxWrap.load(loadFile.headBox, function() {
  //   var headBox = $('#headBox');
  //   var headBoxBg = headBox.css('backgroundColor');
  //   console.log( headBox );
  //   headBoxWrap.css({'backgroundColor':headBoxBg});
  // });

  // =+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ImportFile(headBoxWrap, loadFile.headBox, true);

// bannerBox import
headBoxWrap.after('<div id="bannerBoxWrap"></div>');
var bannerBoxWrap = $('#bannerBoxWrap');
// bannerBoxWrap.load(loadFile.bannerBox);

// =+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ImportFile(bannerBoxWrap, loadFile.bannerBox, true);

// aboutBox
bannerBoxWrap.after('<div id="aboutBoxWrap"></div>');
var aboutBoxWrap = $('#aboutBoxWrap');
// aboutBoxWrap.load(loadFile.aboutBox);

// =+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ImportFile(aboutBoxWrap, loadFile.aboutBox, true);

// newsBox
aboutBoxWrap.after('<div id="newsBoxWrap"></div>');
var newsBoxWrap = $('#newsBoxWrap');
// newsBoxWrap.load(loadFile.newsBox);

// =+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ImportFile(newsBoxWrap, loadFile.newsBox, true);

// blogBox
newsBoxWrap.after('<div id="blogBoxWrap"></div>');
var blogBoxWrap = $('#blogBoxWrap');
// blogBoxWrap.load(loadFile.blogBox);

// =+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ImportFile(blogBoxWrap, loadFile.blogBox, true);

// lnbBox
blogBoxWrap.after('<div id="lnbBoxWrap"></div>');
var lnbBoxWrap = $('#lnbBoxWrap');
// lnbBoxWrap.load(loadFile.lnbBox);

// =+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ImportFile(lnbBoxWrap, loadFile.lnbBox, true);

// footNavBox
lnbBoxWrap.after('<div id="footNavBoxWrap"></div>');
var footNavBoxWrap = $('#footNavBoxWrap');
// footNavBoxWrap.load(loadFile.footNavBox);

// =+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ImportFile(footNavBoxWrap, loadFile.footNavBox, true);

// footbox import
    wrap.append('<div id="footBoxWrap"></div>');
var footBoxWrap = $('#footBoxWrap');

  // footBoxWrap.load(loadFile.footBox, function() {
  //   var footBox = $('#footBox');
  //   var footBoxBg = footBox.css('backgroundColor');
  //   console.log( footBox );
  //   footBoxWrap.css({'backgroundColor':footBoxBg});
  // });

  // =+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ImportFile(footBoxWrap, loadFile.footBox, true);





  // jquery end ====================================
})(this.jQuery);