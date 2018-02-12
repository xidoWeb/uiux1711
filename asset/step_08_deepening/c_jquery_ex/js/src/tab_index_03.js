// tab_index_02.js
(function($) {
  
  var listArea = $('.list_area');
  var listWrap = listArea.find('ul');
  var listLi   = listWrap.children('li');
  var listLiLength = listLi.length;
  // console.log(listLiLength);
  var moreBtn  = $('.more');

  var start = 10;
  var view  = 10;
  listLi.eq(start).prevAll().show();

// 더보기 버튼에서 목록 나타나게 만들기
  moreBtn.on('click',function(e) {
    e.preventDefault();
    var end = start+view; 
    if(start < listLiLength){
      moreBtn.find('span').slideDown();
      for(; start < end; start++){
        listLi.eq(start).fadeIn();  // console.log(start);
          if(start >= listLiLength-1){ moreBtn.hide();   break;  }
      }// for
    }else{  moreBtn.hide();  }// if
  });


//  더보기 버튼 클릭시 처리
  moreBtn.find('button').on('keydown',function(event) {
    console.log(event.key, event.keyCode);
    // tab 9, ese 27, enter 13
    $(document).unbind('keydown');
    // console.log(start-view);
    switch(event.keyCode){
      // case 9: listLi.eq(start-view-1).find('a').focus(); break;
      case 27:
        // $(this).blur();

        // $(this).parent().parent().parent().next().find('.info_area').children('li').eq(0).find('a');
       var tf = $(this).parentsUntil().next()
                       .find('.info_area').children('li').eq(0).find('a');
       tf.focus();
      break;

      case 37: // 추가목록의 처음으로이동(왼쪽버튼)
        listLi.eq(start-view).find('a').focus();  
      break;

      case 38: // 목록중 제일 처음으로이동(위버튼)
        listLi.eq(0).find('a').focus();  
      break;
      case 39: // 현재목록중의 마지막으로(오른쪽버튼)
        listLi.eq(start-1).find('a').focus();  
      break;
      
      case 40: // 더보기 클릭(아래버튼)
        $(this).trigger('click');  
      break;
    }
  });

//주의사항: 전체에서 현재 보이는 내용말고는 없는지?

// 목록에서 기능부여
 listLi.children('a').on('keydown',function(event) {
  // console.log(event.key, event.keyCode);
  // 왼쪽 37, 위 38, 오른쪽 39, 아래 40, esc 27, 탭 9
     var thisI =  $(this).parent().index();

  switch(event.keyCode){
    case 37: // 10개씩 위로이동(왼)
      listLi.eq(thisI-10).find('a').focus(); 
    break;
    case 38: // 이전부분(위)
      listLi.eq(thisI-1).find('a').focus(); 
    break;
    case 39: // 10개씩 아래로이동(오른)
      listLi.eq(thisI+10).find('a').focus();
    break;
    case 40: // 이후부분(아래)
      listLi.eq(thisI+1).find('a').focus();
    break;
    case 27: // 목록 빠져나가기(esc), 다른영역으로 focus 처리
      var tf = $(this).parentsUntil().next()
                      .find('.info_area').children('li').eq(0).find('a');
       tf.focus();
    break;
    case 9:  // 목록 더보기 버튼으로이동
      event.preventDefault();
      moreBtn.find('button').focus();
  }
 });


// 큰영역 체크하기
var wrap          = $('#wrap');
var wrapInBox     = wrap.children();
var boxArr        = [], boxLinkArr    = [];
// console.log(wrapInBox.length);
// console.log(wrapInBox.eq(2).attr('id'));
var b = 0, c = 0;
// id값 가져오기
for(; b < wrapInBox.length; b++){ boxArr[b] = wrapInBox.eq(b).attr('id'); }
// console.log( wrapInBox.eq(0).find('h1').length );

// 해당 영역 제목 가져오기 접속시 키보드 접근성으로 영역 빠르게 찾아가기 만들기
for(; c < wrapInBox.length; c++){
  // boxLinkArr[b] = wrapInBox.eq(b).find('h1');
  if( wrapInBox.eq(c).find('h1').length > 0 ){ 
    boxLinkArr[c] = wrapInBox.eq(c).find('h1').text();
  }else if( wrapInBox.eq(c).find('h2').length > 0){
    boxLinkArr[c] = wrapInBox.eq(c).find('h2').text();
  }// if
}// for

// console.log(boxArr);
// console.log(boxLinkArr);

// ----------------------------
wrap.prepend($('<div>',{class:'base_link'}));
var baseLink =$('.base_link');

$.each(boxArr, function(index, value){
  baseLink.append('<a tabindex="1" href="#'+ value +'">'+ boxLinkArr[index] +'</a>');  
});

baseLink.css({width:'100%', height:'auto', background:'#05f'});
// baseLink.find('a').css({display:'block', width:'100%', padding:'0', fontSize:'0',color:'#fff', textAlign:'center'});
// baseLink.find('a.active').css({padding:'0.5rem 0', fontSize:'1.3rem'});
$('head').append('<style>');
$('head').find('style').append( '\n .base_link  a{display:block; width:100%; padding:0; font-size:0; color:#fff; text-align:center}\n');
$('head').find('style').append( '\n .base_link  a.active{padding:0.5rem 0; font-size:1.3rem;}\n');

baseLink.find('a').on('focus',function() {
  $(this).addClass('active');
  $(this).siblings('a').removeClass('active');
});
baseLink.find('a').last().on('blur',function() {
  $(this).removeClass('active');
  // baseLink.find('a').attr('tabindex','-1');
  baseLink.find('a').removeAttr('tabindex');
});
// ------------------------------

baseLink.find('a').on('click',function(e) {
  //해당하는 경로를 찾아갈것이므로 prevendDefault()는 사용하면 안됨
  // e.preventDefault(); 
  baseLink.find('a').removeClass('active');
  baseLink.find('a').removeAttr('tabindex');
  var thisId = $(this).attr('href');
  // console.log(thisId);
  var focusId = $(thisId);
  focusId.animate({backgroundColor:'#5cc'},function() {
    focusId.removeAttr('style',{'transition':'all 1500ms'});
  });
  // $(thisId).find('a').eq(0).focus();

  focusId.attr('tabindex','0');
  focusId.focus();
  focusId.css({outline:'2px solid #f06'});
  focusId.on('blur',function() {
    focusId.removeAttr('tabindex');
  });
});


})(this.jQuery);