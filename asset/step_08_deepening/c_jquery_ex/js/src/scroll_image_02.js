// scroll_image_01.js
(function($) {
  var scrollBox = $('#scrollBox');
  var i = 1;
  var counter = 193;
  var imgUrl = '../../img/scroll_image/watch/';
  for(; i <= counter; i++){
    scrollBox.append('<img>');
    scrollBox.find('img')
             .eq(i-1)
             .attr({alt:'시계이미지', 
                    src:imgUrl+'Layer '+i+'.png' });
  }
scrollBox.find('img').eq(0).show();


scrollBox.wrap('<div class="scroll_wrap"></div>');
var scrollBoxWrap = scrollBox.parent();

// 스크롤 고정

// auto의 값이나, load() 처리후 가로세로값이 0으로 나올경우
// load() 메소드는 selector.load(filedata, function(){});
// -------------------

scrollBox.find('img').eq(0).on('load', function() {
  var iH = scrollBox.find('img').height();
  // console.log(iH);

  var myH = iH; // 이미지 높이값
  var myStep = 20; // 스크롤 처리시 10px을 1씩 이미지변환하도록 step단계설정
  var scrollW = scrollBox.width(); // 가로값
  var scrollOffset = scrollBox.offset().top;
  var scrollWrapH;

  scrollBoxWrap.css({position:'relative'});

    var scrollWrapH = myH+(counter * myStep); // 부모의 크기값 변경
    scrollBoxWrap.css({height:scrollWrapH});
    
  // 마우스 스크롤이 이미지 변환
  $(document).on('scroll',function(e) {
    var scrollV = $(this).scrollTop(); // 스크롤위치 확인
    var scrollI; // 이미지 순서를 파악하기 위한 변수
    var myScroll = parseInt((scrollV - scrollOffset)/myStep); // 스크롤 값변경(고정시 0부터 시작하도록 정리)
    // console.log(myScroll);

    // 이미지 순서 파악하기
    //myScroll 값처리로인해 음수시 최소 0, 최대 이미지갯수로 처리
    if (myScroll <= 0){ 
      scrollI = 0
    } else if(myScroll >= counter-1){
      scrollI = counter-1;
    }else{scrollI = myScroll}
    // console.log(scrollV);

    // 이미지 스크롤시 고정위치값 처리
    // scrollWrapH - myH : 부모의 크기값에서 사용 이미지 높이값을 뺀 크기
    // scrollV-scrollOffset : 스크롤 크기값 변경시 상단 이미지값 제거한 크기
    
    if(scrollOffset <= scrollV && scrollWrapH-myH > scrollV-scrollOffset){
      scrollBox.css({position:'fixed',width:scrollW, top:0, left:'50%', marginLeft:-scrollW/2});
       // scrollBoxWrap.css({height:scrollWrapH});
        // console.log(scrollWrapH-myH,scrollV-scrollOffset);
    }else if(scrollWrapH-myH <= scrollV-scrollOffset){
      scrollBox.css({position:'absolute', top:'auto', bottom:0});
    }else{
      scrollBox.css({position:'relative'});
    }

      scrollBox.find('img').hide();
      scrollBox.find('img').eq(scrollI).show();
  });

});

})(this.jQuery);





