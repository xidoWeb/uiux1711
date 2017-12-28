// template.js

function ImportFile(makeDivName, linkFile, wrapColorBoolean){
  // makeDivName: 생성할 코드이름
  // linkFile : 외부에서 불러올 링크 파일이름
  // wrapColorBoolean : 부모태그에서 불러온  태그의 배경색상을 가져올것인지 판단

  var wrap = $('#wrap');
  // 1. 파일이름을 만들어서 부모태그를 생성
  var wrapDiv = wrap.append('<div class="' + makeDivName + 'Wrap"></div>');
  // 2. 생성된 부모태그에 필요한 파일을 load() 처리
  var select = $('.' + makeDivName + 'Wrap');
  select.load(linkFile, function(){
    var selectChild = select.children();
    selectChild.css({margin:'0 auto'});

    // 불러온 파일의 배경색상을 부모태그에 적용할지 판단 유무
    var wrapColorBoo = wrapColorBoolean | true;
    if(wrapColorBoo){
      var selectColor = selectChild.css('backgroundColor');
      select.css({backgroundColor:selectColor});
    }

  }); // select.load()
}