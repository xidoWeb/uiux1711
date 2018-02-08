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

  var modalLeft  = viewBox.find('.left_btn');
  var modalRight = viewBox.find('.right_btn');
// ---------------------------------------------------------------------------------------------------------


  // 어두운 배경 만들기/숨기기
  var bgBack  = $('.bg_back');
  bgBack.css({width:'100%', height:'100%', position:'fixed', zIndex:'500', top:0, left:0, backgroundColor:'rgba(0,0,0,0.5)'});
  viewBox.css({zIndex:1000});

  viewBox.hide();  bgBack.hide();

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
   // 모달 'modalRight', 'modalLeft' 버튼 기능시 2곳이상에서 사용하기위한 함수처리
 var memoryBtn = function (memoriIndex){
     if(memoriIndex <= 0){ 
     memoriIndex = 0;     modalLeft.fadeOut(300);      modalRight.fadeIn(300);
   }else if(memoriIndex >= dataLength-1){
     memoriIndex = dataLength-1;      modalRight.fadeOut(300);     modalLeft.fadeIn(300);
   }else{     modalLeft.fadeIn(300);     modalRight.fadeIn(300);
   }
 };

  listBtn.on('click', ['button'], function(e) {
    e.preventDefault();   
    memoriIndex = $(this).index();
    viewBox.find('img').attr({alt:data[memoriIndex].big, src:bigDir + data[memoriIndex].file });
    viewBox.fadeIn();    bgBack.fadeIn();
    viewBox.find('button.close').focus();
    console.log(memoriIndex);
    // memoriIndex기능의 좌우버튼 처리기능
    memoryBtn(memoriIndex);
  }); // listBtn.on('click')

  // viewBox가 보이는 상태에서 오른버튼 클릭시 현재 보이는 이미지의 다음이미지를 보이게 만들자!!!
  /*
  modalRight.on('click',['button'],function(e) {
    e.preventDefault();
    memoriIndex += 1;

    // if(memoriIndex >= dataLength){ 
    //   memoriIndex = 0;  
    //   modalRight.fadeOut(); 
    // }else{ 
    //   modalRight.fadeIn();  
    // }
    // 무한으로 돌게 만들고 싶다면? 위 if문은 삭제하고
     if(memoriIndex >= dataLength){ memoriIndex = 0; }

    viewBox.find('img').attr({alt:data[memoriIndex].big, src:bigDir + data[memoriIndex].file });
    console.log(memoriIndex);
  });
   modalLeft.on('click',['button'],function(e) {
    e.preventDefault();
    memoriIndex -= 1;
    // if(memoriIndex <= 0){   
    //   memoriIndex = 0;
    //   modalLeft.fadeOut(); 
    // }else{
    //   modalLeft.fadeIn();
    // }

    // 무한으로 돌게 만들려면?
     if(memoriIndex <= 0){ memoriIndex = dataLength - 1; }

    viewBox.find('img').attr({alt:data[memoriIndex].big, src:bigDir + data[memoriIndex].file });
    console.log(memoriIndex);
  });
*/
// 위 modalRight modalLeft 기능을 하나로 합치자!
 var slideBtn = $('.slide_btn');
 slideBtn.children('button').on('click',function(e) {
  e.preventDefault();  var _this = $(this);

  // 클릭 버튼 구분
  // console.log(_this);
  // console.log(modalRight);
  // console.log(modalLeft);
// modalLeft
modalRight
  if(_this[0] == modalRight[0]) { memoriIndex+=1; }else if(_this[0] == modalLeft[0]){ memoriIndex-=1; }
  // 선택1: 무한으로 돌릴려면
  // if(memoriIndex <= 0){ memoriIndex = dataLength - 1; }else if(memoriIndex >= dataLength){ memoriIndex = 0 }
  // 선택2: 한쪽방향으로만 보게만들려면(버튼도 구분하여 처리해야함)
  // 단, 기본기능에서 체크시 처음이나 마지막위치에서는 일부 원활하게 되지 않으므로, 별도의 함수로사용하여 구동되게 만드는 것이 좋다!
  // memoriIndex기능의 좌우버튼 처리기능
  memoryBtn(memoriIndex);

  viewBox.find('img').attr({alt:data[memoriIndex].big, src:bigDir + data[memoriIndex].file });

  console.log(memoriIndex);
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
