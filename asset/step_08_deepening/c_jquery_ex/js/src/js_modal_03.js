// js_modal_02.js
(function($) {
/* modal  기능만들기
  1. 모달창 띄워져있을경우
    - 다음(>)클릭시 다음이미지 나타나기
    - 이전(<)클릭시 다음이미지 나타나기
    - 이미지 fade기능으로 전환하기
    - 모달창 띄우기기능(마우스 오버시 내용설명 나타나기)
    - 이미지 전환시 설명 보이기
    - 모달이미지 페이지번호 나타나게만들기(현재번호/전체번호)
    - 자동이미지 전환(setInterval)

  2. 목록의 내용
  - 전체 목록 일부분씩 끊어서 보여주기(목록 버튼만들기)
*/
  var modalBox = $('#modalBox');
  // 1,2 modal영역 기본 구조 만들기(만든후 숨기기), list 영역 기본구조 만들기
  modalBox.append('<div class="view_box"><button type="button" class="close"> <i class="fa fa-times" aria-hidden="true"></i> <span class="hidden">닫기</span> </button><img></div><div class="bg_back"></div>');
  modalBox.append('<div class="list_box"><ul class="clearfix"></ul></div>'); //아래방법으로 대체가능

  var viewBox = $('.view_box'), listBox = $('.list_box').find('ul');
// viewBox내부에 좌우버튼 만들기---------------------------------------------------------------------------
  viewBox.append($('<div>',{class:'slide_btn'}));
  $('.slide_btn').append($('<button>',{type:'button', class:'left_btn'}));
  $('.slide_btn').append($('<button>',{type:'button', class:'right_btn'}));
  $('.left_btn').append($('<i>',{class:'fa fa-arrow-left'}), $('<span>', {class:'hidden', text:'이전 이미지 보기'}) );
  $('.right_btn').append($('<i>',{class:'fa fa-arrow-right'}), $('<span>', {class:'hidden', text:'다음 이미지 보기'}) );
// ---------------------------------------------------------------------------------------------------------


  // 어두운 배경 만들기/숨기기
  var bgBack  = $('.bg_back');
  bgBack.css({width:'100%', height:'100%', position:'fixed', zIndex:'500', top:0, left:0, backgroundColor:'rgba(0,0,0,0.5)'});
  viewBox.css({zIndex:1000});

  // viewBox.hide();  bgBack.hide();

  // 5. json파일불러오기(서버구동필수)
var jsonUrl = '../../js/data/modalImage.json';
var baseDir    = '../../img/modal_img_02/', thumDir = baseDir + 'thum/', bigDir = baseDir + 'big/';
$.getJSON(jsonUrl,  function(data){ // console.log(data);
  var i          = 0, dataLength = data.length;
  for(; i<dataLength; i++){
    listBox.append('<li><button type="button"></button></li>');
    listBox.children('li').eq(i).find('button').append($('<img />',{alt:data[i].thum, src:thumDir + data[i].file }));
  }
// ----------------------------------------------------
   var memoriIndex = 0;
  // 3. list버튼 클릭시 modal창 띄우기 ==> $.getJSON 으로 이동
  var listBtn = listBox.find('li');
  listBtn.on('click', ['button'], function(e) {
    e.preventDefault();   
    memoriIndex = $(this).index();
    viewBox.find('img').attr({alt:data[memoriIndex].big, src:bigDir + data[memoriIndex].file });
    viewBox.fadeIn();    bgBack.fadeIn();
    viewBox.find('button.close').focus();
  });
 // 4. modal 닫기버튼 클릭시 사라지기(modal창) ==> $.getJSON 으로 이동
  viewBox.find('button.close').on('click',function(e) {
    e.preventDefault();    viewBox.fadeOut();    bgBack.fadeOut();
    console.log(memoriIndex);
    listBtn.eq(memoriIndex).find('button').focus();
  });

}); // $.getJSON

// -----------------------------------------------------------------------------
})(this.jQuery);
