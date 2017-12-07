// jquery_base_method_03.js

(function($){
// jQuery start ------------------------------------------------------
  
var wrap = $('#wrap');
// #headBox 생성
wrap.html('<header id="headBox"></header>');

// #headBox 생성후 선택
var headBox = $('#headBox');
headBox.wrap('<div id="headBoxWrap"></div>');

// #headBox가 가지고 있는 배경색을 가져와 보자!!!
var headColor = headBox.css('backgroundColor');
console.log(headColor);
var headWrap = $('#headBoxWrap');
headWrap.css({backgroundColor:headColor});

// 이번엔 마지막에 들어갈 footer#footBox를 만들어 보자!
wrap.append('<footer id="footBox"></footer>');
var footBox = $('#footBox');

footBox.wrap('<div id="footBoxWrap"></div>');
var footColor = footBox.css('backgroundColor');
var footWrap = $('#footBoxWrap');
footWrap.css({backgroundColor:footColor});

// #headBox(#headBoxWrap의) 동레벨의 뒤에 section#bannerBox를 생성
headWrap.after('<section id="bannerBox"></div>');


// #footBox(#footBoxWrap의) 동레벨의 앞에 article#contentBox를 생성
footWrap.before('<article id="contentBox"></article>');
var contentBox = $('#contentBox');
    contentBox.html('<p></p>');
var myp = contentBox.find('p');
myp.text('글자를 입력해 보겠습니다.!!!!!!!!!');
myp.css({color:'#fff', fontSize:'2rem', fontWeight:'bold', textAlign:'center', paddingTop:20+'rem'});

// jQuery end ------------------------------------------------------
})(this.jQuery);