// js_08_onepageScroll_01.js

(function($) {
/* onepage scroll
  1. html문서에서 미리 indicator기능을 생성하여 스크롤처리
  2. 동일한 class이름을 사용할경우 쉽게 data를 가져와서 '.indicator'기능을 생성
*/

// 2. html문서에서 동일한 class이름을 사용할경우 쉽게 data를 가져와서 '.indicator'기능을 생성
 var wrap = $('#wrap');
 var page = $('.page');
 // console.log(page.length);
 var headBox = $('#headBox');
  headBox.append('<div class="indicator"><ul></ul></div>');
 var indi    = $('.indicator');
 var indiUl =  indi.children('ul');

 // li를 .page만큼 생성  
 // indicator 생성시, 내부에 h1 또는 h2가 존재한다는 조건에서 사용
  var i = 0; 
  var pageAttr, text;
 for(; i < page.length; i++){

  // page의 내부의 id값을 변수로 저장
  pageAttr = page.eq(i).attr('id');

  // page자식중 제목요소가 h1 이나 h2를 구분하여 처리
  if(page.eq(i).children('h1').length > 0 ){
    text = page.eq(i).find('h1').text();
  }else if(page.eq(i).children('h2').length > 0 ){
    text = page.eq(i).find('h2').text();
  }else{
    text = page.eq(i).find('h3').text();
  }

  indiUl.append('<li><a href="#' + pageAttr + '"><span>' + text + '</span></a></li>');
  // console.log(text);
 }


// 1. '.indicator' html문서를 만들어 놓았을경우 처리할 수 있는 기능
  // var indi    = $('.indicator');
  var indiLi  = indi.find('li');
  var timed  = 800;
  
  // console.log(navTop);
  indiLi.on('click', ['a'], function(e) {
    e.preventDefault();
    var _thisAttr = $(this).find('a').attr('href');
    // console.log(_thisAttr);
    var offsetTest = $(_thisAttr).offset().top;
    // console.log(offsetTest);
    $('html, body').stop().animate({scrollTop:offsetTest}, timed, 'easeOutBack');
  });


// 3. top 버튼 생성하기
// 4. nav 이동하여 상단 고정
// var wrap = $('#wrap');
wrap.append('<div class="top"><a href="#">top</a></div>');
var top = $('.top');
var style = $('head')
    .append('<style>\n .top{width:3rem; height:auto; color:#fff; font-size:1.3rem; position:fixed; bottom:2rem; right:0.5rem; border-radius:0.3rem; overflow:hidden; display:none;}\n .top>a{display:block; width:100%; height:auto; text-transform:uppercase; color:inherit; font-weight:bold; background-color:#333; padding:1rem 0.4rem; } \n .top>a:focus, .top>a:hover{background-color:#777; }</style>');

  // top btn 생성
  var nav       = $('#nav');
  var navTop    = nav.offset().top;
  // console.log(navTop);
  // 기준 3번째 상자가 상단에 위치하면 
  var topView = page.eq(2).offset().top;
    // console.log(topView);

 // 5. h1값 설정
 var h1A = $('h1').find('a');
 // h1>a의 margin-left 값을 가져오기
 var h1AMarginLeft = parseInt(h1A.css('marginLeft'));
 // console.log('h1>a의 margin-left 값: ',h1AMarginLeft);
 // 브라우저왼쪽에서 떨어진 값 찾기
 var h1ALeftOrigin = h1A.offset().left;
 console.log('h1ALeftOrigin: ',h1ALeftOrigin);
 // ---------------------------------------

 //6. scroll 처리시, 해당위치에 맞는 indicator addClass('focus') 처리
 var pageArr = [];   // .page의 각각의 값을 저장하기위해 배열변수 만들기
 var j = 0; 
 for(; j < page.length; j++){
   // .page의 각각의 값을 변수 pageArr의 순서에 맞게 저장
  pageArr[j] = page.eq(j).offset().top;
 }
 // 검증(배열의 결과물 확인하기)
 // console.log(pageArr);

 // --------------------------------------
 // 최초 값처리(indicator 첫번째에 focus효과 처리)
 indiLi.eq(0).addClass('focus');

$(window).on('scroll',function() {
 var h1ALeft = h1A.offset().left;
 // console.log('h1>a의 브라우저왼쪽에서부터: ', h1ALeft +'px');

  var docScroll = $('html,body').scrollTop();
  // console.log(docScroll);
  
  //3. top버튼 위치고정
  // if(topView <= docScroll){ top.fadeIn(); }else{ top.fadeOut(); }
  (topView <= docScroll) ? top.fadeIn() : top.fadeOut(); 
  //4. nav위치고정
  // if(navTop <= docScroll+20){ nav.addClass('fixed'); }else{ nav.removeClass('fixed'); }
  (navTop <= docScroll+20) ? nav.addClass('fixed') : nav.removeClass('fixed');
  //5. 스크롤시, h1이 왼쪽 상단으로 위치 이동

 if(h1ALeftOrigin <= docScroll){   h1A.css({marginLeft: h1AMarginLeft - h1ALeftOrigin});
 }else{   h1A.css({marginLeft: h1AMarginLeft - docScroll }); }

 // 6. docScroll값과,  pageArr값이 일치할때 처리
 // if(pageArr[1] >= docScroll){ 
 //  indiLi.removeClass('focus');
 //  indiLi.eq(0).addClass('focus');

 // }else if(pageArr[2] >= docScroll){ 
 //  indiLi.removeClass('focus');
 //  indiLi.eq(1).addClass('focus');

 // }else if(pageArr[3] >= docScroll){ 
 //  indiLi.removeClass('focus');
 //  indiLi.eq(2).addClass('focus');

 // }else if(pageArr[4] >= docScroll){ 
    // focus(3);
 // }

var focus = function(k){
  indiLi.removeClass('focus');
  indiLi.eq(k).addClass('focus');
}; 

var wh = page.outerHeight(true);
var myCount = parseInt(docScroll / wh);
// console.log(myCount);
if(pageArr[myCount] <= docScroll){
  focus(myCount);
}


});
// -----------------------------------------



})(this.jQuery);