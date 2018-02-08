// js_modal_02.js
(function($) {
  // 1. modal영역 기본 구조 만들기(만든후 숨기기)
  // 2. list영역 기본 구조 만들기
  // 3. list버튼 클릭시 modal창 띄우기
  // 4. modal 닫기버튼 클릭시 사라지기(modal창)
  // 5. json파일불러오기(서버구동필수)
  // 6. 각각 list영역에 파일담기
  // 7. 클릭시 modal 영역에 이미지 대체하기 만들기
// -----------------------------------------------------------------------------
  var modalBox = $('#modalBox');
  // 1. modal영역 기본 구조 만들기(만든후 숨기기)
      modalBox.append('<div class="view_box"><button type="button"> <i class="fa fa-times" aria-hidden="true"></i> <span class="hidden">닫기</span> </button><img></div>');
  // 2. list 영역 기본구조 만들기
      modalBox.append('<div class="list_box"><ul class="clearfix"></ul></div>'); //아래방법으로 대체가능

      // modalBox.append($('<div>',{class:"view_box", append:'<button type="button"><img>'}));
      // modalBox.append( $('<div>', {class:'list_box', append:'<ul>'}));

  var viewBox = $('.view_box');
  var listBox = $('.list_box').find('ul');

  viewBox.hide();

  // 2-2. list 영역 목록 만들기(임시 30개)
  for(var i=0; i<30; i++){
    listBox.append('<li><button type="button"><img src="" alt="" /></button></li>');
  }

  // 3. list버튼 클릭시 modal창 띄우기
  var listBtn = listBox.find('li');
  listBtn.on('click', ['button'], function(e) {
    e.preventDefault();
    viewBox.fadeIn();
  })
// -----------------------------------------------------------------------------
})(this.jQuery);
