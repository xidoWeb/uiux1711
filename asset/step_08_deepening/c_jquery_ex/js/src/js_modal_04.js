// js_modal_04.js
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

  var viewBox = $('.view_box'),  listWrap = $('.list_box'), listBox = listWrap.find('ul');
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
  bgBack.css({width:'100%',height:'100%',position:'fixed',zIndex:'500',top:0,left:0,backgroundColor:'rgba(0,0,0,0.5)'});
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
   // console.log(memoriIndex);
   return memoriIndex;
 };

  listBtn.on('click', ['button'], function(e) {
    e.preventDefault();   
    memoriIndex = $(this).index();
    viewBox.find('img').attr({alt:data[memoriIndex].big, src:bigDir + data[memoriIndex].file });
    viewBox.fadeIn();    bgBack.fadeIn();
    viewBox.find('button.close').focus();
    console.log(memoriIndex);
    // memoriIndex기능의 좌우버튼 처리기능
    memoryBtn(memoriIndex);    mView();    modalPage();    modalNarr();
  }); // listBtn.on('click')

// 위 modalRight modalLeft 기능을 하나로 합치자!
 var slideBtn = $('.slide_btn');
 slideBtn.children('button').on('click',function(e) {
  e.preventDefault();  
  var _this = $(this);
  var thisI;
  if(_this[0] == modalRight[0]) {     thisI = memoriIndex+=1;  }
  else if(_this[0] == modalLeft[0]){    thisI = memoriIndex-=1;  }
  // 선택1: 무한으로 돌릴려면
  // if(memoriIndex <= 0){ memoriIndex = dataLength - 1; }else if(memoriIndex >= dataLength){ memoriIndex = 0 }
  // 선택2: 한쪽방향으로만 보게만들려면(버튼도 구분하여 처리해야함)
  // 단, 기본기능에서 체크시 처음이나 마지막위치에서는 일부 원활하게 되지 않으므로, 별도의 함수로사용하여 구동되게 만드는 것이 좋다!
  // memoriIndex기능의 좌우버튼 처리기능
  memoriIndex = memoryBtn(thisI);
  // console.log(memoriIndex);
  modalPage();   modalNarr();
  viewBox.find('img').attr({alt:data[memoriIndex].big, src:bigDir + data[memoriIndex].file });
  // console.log(memoriIndex);
 }); 

 // 4. modal 닫기버튼 클릭시 사라지기(modal창) ==> $.getJSON 으로 이동
  viewBox.find('button.close').on('click',function(e) {
    e.preventDefault();    viewBox.fadeOut();    bgBack.fadeOut();
    console.log(memoriIndex);
    listBtn.eq(memoriIndex).find('button').focus();
  });

// ------------------------------------------------------------------------------------

  // 모달창에서만 키포커스 움직이기
  viewBox.find('button').last().on('blur',function(event) {
        viewBox.find('button.close').focus();
    // console.log(event.type);   
  });
  // 모달창 키보드 제어
  function mView() {
    var viewBoxSee = viewBox.css('display') == 'block';
    // console.log(viewBoxSee);
    if(viewBoxSee){
      $(document).unbind('keydown');    

      $(document).on('keydown', function(event) {
        // console.log(event.key, event.keyCode, event.which);
        // ArrowLeft 37, ArrowRight 39, Escape 27
          switch (event.which){ 
            case 37:
              modalLeft.focus();
              modalLeft.trigger('click');    
              break;
            case 39:
              modalRight.focus();
              modalRight.trigger('click');  
              break;
            case 27:
              viewBox.find('.close').focus();     
              viewBox.find('.close').trigger('click'); 
              break;
          } 
      });
    }// if(viewBoxSee)
  }//  function mView();
  mView();
// -----------------------------------------------------------------------------------
// 모달창 설명 보이기 기능만들기
function modalNarr() {
  var pageNarrView = viewBox.find('p.page_narr').length;

  if(pageNarrView <= 0){ 
    viewBox.find('img').after('<p class="page_narr" style="display:none">'+ data[memoriIndex].big +'</p>'); 
  }else if(pageNarrView >= 1){ 
    $('.page_narr').before('<p class="page_narr" style="display:none">'+ data[memoriIndex].big +'</p>'); 
  }
  var parrNarr = $('.page_narr');
  parrNarr.fadeToggle();
  parrNarr.eq(1).remove();
  parrNarr.last().text(data[memoriIndex].big);

  parrNarr.css({position:'absolute', bottom:'0.5rem', left:'0.5rem', zIndex:500, textAlign:'left',
                        width:'500px', height:'auto', backgroundColor:'#fff',
                        padding:'0.5rem 0', borderRadius:'3rem', fontWeight:'bold', textIndent:'1rem'});
}// modalNarr();

// 모달페이지 순서 보이기 기능 만들기
  function modalPage() {
    var modalPageView = viewBox.find('p.modal_page').length;
    // console.log('modal_page: ',modalPageView);
    if(modalPageView <= 0){ viewBox.find('img').after('<p class="modal_page"></p>'); }
    var modalPage = $('.modal_page');
    // console.log('count: ', memoriIndex);
    modalPage.text((memoriIndex+1) + '/' + dataLength);
    modalPage.css({position:'absolute', bottom:'0.5rem', right:'0.5rem', zIndex:500, textAlign:'center',
                        width:'100px', height:'auto', backgroundColor:'rgba(255,255,255,0.8)',
                        padding:'0.5rem 0', borderRadius:'3rem', fontWeight:'bold'});
  }// modalPage();
// ---------------------------------------------------------------------------------
// 2018.02.09오후 모달리스트 기능을 좀더 복잡하게 부분리스트형식으로 만들어보자!
//1. 모달 리스트내용을 일부만 보이게 만들자!
listWrap.css({height:'200px', overflow:'hidden', position:'relative'});
listBox.css({position:'absolute', left:'50%', marginLeft:'-480px'});

listWrap.prepend($('<div>',{class:'list_view_btn', 
                   append:'<button class="list_view_left_btn"></button><button class="list_view_right_btn"></button>'}));
var listViewBtn = $('.list_view_btn'), listLBtn = $('.list_view_left_btn'),listRBtn = $('.list_view_right_btn');

listViewBtn.children('button').append( $('<i></i>',{class:'fa'}), $('<span></span>',{class:'hidden'}));

listLBtn.find('i').addClass('fa-angle-left');
listRBtn.find('i').addClass('fa-angle-right');

listLBtn.find('span').text('이전목록보기');
listRBtn.find('span').text('다음목록보기');

listViewBtn.css({position:'absolute', top:'50%', left:'50%', marginTop:'-50px', marginLeft:'-480px',
                      width:'960px', height:0});
listViewBtn.find('button').css({width:'50px', height:'100px', fontSize:'3rem'});
listLBtn.css({float:'left', marginLeft:'-100px'});
listRBtn.css({float:'right',  marginRight:'-100px'});

listViewBtn.find('i').css({fontSize:'3rem', color:'#333'});

// listBtn 내부 좌우버튼(listLBtn, listRBtn) 클릭시 내부 목록을 순차적으로 보이게 만들기

var listBoxTop = 0;
listViewBtn.children('button').on('click', function(e) {
  e.preventDefault();
  var _this = $(this);

  if(_this[0] == listRBtn[0]){
    listBoxTop -= 180;

    (listBoxTop <= -listBox.height()) ? listBoxTop = -listBox.height()+180 : listBoxTop;

  }else if(_this[0] == listLBtn[0]  && !listBoxTop <= 0){
    listBoxTop += 180;
  }
  listBox.stop().animate({marginTop:listBoxTop + 'px'});
});
// -------------------------------------------------------------------------------
}); // $.getJSON

// -----------------------------------------------------------------------------
})(this.jQuery);
