(function($) {
  // 각 기능을 요약해서 처리할 함수로 바꾸기

function ImportFile(makeFile, file, backgroundIf) {

    var myDiv = wrap.append('<div class="'+ makeFile +'Wrap"></div>');
    // var idFind = myDiv.attr({id:makeFile});
    // console.log(makeFile);
    var select = $('.'+makeFile+'Wrap');
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
var wrap = $('#wrap');
var baseUrl  = '../../html/src/';
var loadFile = {headBox   : baseUrl + 'headBox.html',
               bannerBox : baseUrl + 'bannerBox.html',
               aboutBox  : baseUrl + 'aboutBox.html',
               newsBox   : baseUrl + 'newsBox.html',
               blogBox   : baseUrl + 'blogBox.html',
               lnbBox    : baseUrl + 'lnbBox.html',
               footNavBox: baseUrl + 'footNavBox.html',
               footBox   : baseUrl + 'footBox.html'};

ImportFile('headBox'   , loadFile.headBox    , true);
ImportFile('bannerBox' , loadFile.bannerBox  , true);
ImportFile('aboutBox'  , loadFile.aboutBox   , true);
ImportFile('newsBox'   , loadFile.newsBox    , true);
ImportFile('blogBox'   , loadFile.blogBox    , true);
ImportFile('lnbBox'    , loadFile.lnbBox     , true);
ImportFile('footNavBox', loadFile.footNavBox , true);
ImportFile('footBox'   , loadFile.footBox    , true);

})(this.jQuery);