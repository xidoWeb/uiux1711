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
var loadFile = ['headBox',
                'bannerBox',
                'aboutBox',
                'newsBox',
                'blogBox',
                'lnbBox',
                'footNavBox',
                'footBox'];

for(var i = 0 ; i < loadFile.length ; i++){
  ImportFile(loadFile[i],baseUrl+loadFile[i]+'.html', true);
}                

})(this.jQuery);