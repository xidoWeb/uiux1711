// position_02.js

(function($){

  var popupBox =  $('#popupBox');

// 버튼클릭시 사라지게 만들기
  popupBox.children('button').on('click', function(){
    popupBox.hide();
  });

// h1클릭시 팝업 나타나게만들기
  $('h1').on('click', function(){
    $('#popupBox').show();
  });

  // 일정스크롤이상위치에서 부분 나타나게 만들기
  var sideBox =  $('.side_box');
  var topBtn = $('.top_btn');

  sideBox.delay(500).fadeOut();
  var content = $('#contentBox').offset().top;
  // console.log(content);
  $(window).on('scroll',function(){
    popupBox.fadeOut();

    var scroll_top = $(this).scrollTop();
    // console.log(scroll_top);
    if(scroll_top >= content){
      sideBox.fadeIn();
      topBtn.fadeIn();
      
    }else{
      sideBox.fadeOut();
      topBtn.fadeOut(); 
    }
  });

})(this.jQuery);
