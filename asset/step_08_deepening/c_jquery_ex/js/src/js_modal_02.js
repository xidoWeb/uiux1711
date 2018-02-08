// js_modal_02.js
(function($) {
  // 1. modal영역 기본 구조 만들기(만든후 숨기기)
  // 2. list영역 기본 구조 만들기
  // 3. list버튼 클릭시 modal창 띄우기
  // 4. modal 닫기버튼 클릭시 사라지기(modal창)
  // 덤, 접근성(키보드)이 반영되게 처리해라
  // 5. json파일불러오기(서버구동필수)
  // 6. 각각 list영역에 파일담기
  // 7. 클릭시 modal 영역에 이미지 대체하기 만들기
// -----------------------------------------------------------------------------
  var modalBox = $('#modalBox');
  // 1. modal영역 기본 구조 만들기(만든후 숨기기)
      modalBox.append('<div class="view_box"><button type="button"> <i class="fa fa-times" aria-hidden="true"></i> <span class="hidden">닫기</span> </button><img></div>           <div class="bg_back"></div>');
  // 2. list 영역 기본구조 만들기
      modalBox.append('<div class="list_box"><ul class="clearfix"></ul></div>'); //아래방법으로 대체가능

      // modalBox.append($('<div>',{class:"view_box", append:'<button type="button"><img>'}));
      // modalBox.append( $('<div>', {class:'list_box', append:'<ul>'}));

  var viewBox = $('.view_box'), listBox = $('.list_box').find('ul');

  //덤! 어두운 배경 만들기
  var bgBack  = $('.bg_back');
  bgBack.css({width:'100%', height:'100%', 
             position:'fixed', zIndex:'500', top:0, left:0,
             backgroundColor:'rgba(0,0,0,0.5)'});
  viewBox.css({zIndex:1000});

  viewBox.hide();  bgBack.hide();

  // 2-2. list 영역 목록 만들기(임시 30개)
  // for(var i=0; i<30; i++){
  //   listBox.append('<li><button type="button"><img src="" alt="" /></button></li>');
  // }
// -------------------------------------------------------------------------------
  // 5. json파일불러오기(서버구동필수)
  // json파일위치파악
  // 가져온파일의 목록체크
  // 작은이미지/큰이미지 모음위치변수지정
  // '2-2' 기능 json파일을통해 내용변경처리
  // '3~4' 기능 처리
  // 6. 각각 list영역에 파일담기
  // 7. 클릭시 modal 영역에 이미지 대체하기 만들기
var jsonUrl = '../../js/data/modalImage.json';
var baseDir    = '../../img/modal_img_02/';
var thumDir    = baseDir + 'thum/';
var bigDir     = baseDir + 'big/';
$.getJSON(jsonUrl,  function(data){
   // 가져온파일의 목록체크
  // console.log(data);
  var i          = 0;
  var dataLength = data.length;

  for(; i<dataLength; i++){
    listBox.append('<li><button type="button"></button></li>');
    listBox.children('li').eq(i).find('button')
                                .append($('<img />',{alt:data[i].thum, src:thumDir + data[i].file }));
  }
  // ----------------------------------------------------
  // 선택한 순서값을 기억하게 변수만들기
   var memoriIndex = 0;

  // 3. list버튼 클릭시 modal창 띄우기 ==> $.getJSON 으로 이동
  var listBtn = listBox.find('li');
  listBtn.on('click', ['button'], function(e) {
    e.preventDefault();   
    memoriIndex = $(this).index();
    viewBox.find('img').attr({alt:data[memoriIndex].big, src:bigDir + data[memoriIndex].file });
    viewBox.fadeIn();    bgBack.fadeIn();
    viewBox.find('button').focus();
  });
 // 4. modal 닫기버튼 클릭시 사라지기(modal창) ==> $.getJSON 으로 이동
  viewBox.find('button').on('click',function(e) {
    e.preventDefault();    viewBox.fadeOut();    bgBack.fadeOut();
    console.log(memoriIndex);
    listBtn.eq(memoriIndex).find('button').focus();
  });

}); // $.getJSON







// -------------------------------------------------------------------------------

// -----------------------------------------------------------------------------
})(this.jQuery);
