(function($) {
  // jQuery start =========================================

  // .attachment 의 위치가 상단에어 얼마나 떨어져있는지 확인
  var attOffset = $('.attachment').offset().top;
  console.log(attOffset);


  // 브라우저상에서 스크롤바가 움직였을때 이벤트 처리
  $(window).on('scroll',function() {
    // 스크롤의 위치가 어디에 있는지 파악
    var scrollOffset = $(this).scrollTop();
    console.log(scrollOffset);

    // attOffset 변수값과 scrollOffset변수값이 일치하거나 스크롤이 그 이상처리되면
    // 효과를 발휘
    if(attOffset <= scrollOffset){
      console.log("둘의 위치가 일치하는것 확인!!!");
    }

  });


  // jQuery end =========================================
})(this.jQuery);