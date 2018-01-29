// js_07_indexEq_01.js
(function($) {
  // 1. 선택한 순서에 맞는 .box내의 div를 addClass 적용하기
  // 2. 선택한 버튼이 몇번째인지 체크하고 해당 .show내부의 p에 선택한 버튼의 순서를 알려주기
  // 3. 선택한 버튼 내부에 별도의 속성값을 사용하여 이동할 링크를 저장하고, 
  // 3-1. 클릭시 .show>p에 링크태그를 생성하여 해당 값을대입하여 이동버튼으로 변경처리
  // 4. 3번의 속성값(링크할 위치)를 객체형식으로 처리하여 사용.
  // 5. button태그를 삭제하고, 객체형식의 목록내용(갯수를파악)으로 버튼생성
  
  var btnBox = $('.btn');
  // var btn = btnBox.children('button');  // 4-1의 경우 button을 생성해야하므로 후에 지정
  var show = $('.show').children('p');
  var box = $('.box').children('div');

  // 1
  // btn.on('click',function(e) {
  //   e.preventDefault();
  //   var _this = $(this);
  //   // console.log( _this.index() );
  //   var _thisI = _this.index();

  //   box.eq(_thisI).addClass('active');
  //   box.eq(_thisI).siblings('div').removeClass('active');
  //   $('.show').children('p').text( (_thisI+1)+'번째 버튼을 선택하였습니다' );
  // });

  // 2
  // $.each(btn,function(index, value) {
  //   $(this).on('click',function() {
  //     // console.log(index);
  //     $('.show').children('p').text( (index+1)+'번째 버튼을 선택하였습니다' );
  //   })
  // });


  // 3
  // var show = $('.show').children('p');

  // btn.on('click',function(e) {
  //   e.preventDefault();
  //   var _this = $(this);
  //   // show.text('링크를 생성하였습니다.');
  //   // 존재 유무를 판단하는 메소드
  //   // hasClass(), is()
  //   var myLink = _this.attr('data-link');
  //   console.log(myLink);
  //   var showA = show.find('a').length;
  //   // console.log(showA);
  //   if(showA > 0){
  //     show.find('a').attr({href:myLink, title:myLink, target:'_blank'});
  //   }else{
  //     // show.append('a');  // shw내부의 뒤에 a요소를 삽입해라!(다른곳에있는 a요소를 끌어옴)
  //     // show.append().html('<a>이동하기</a>'); // shw내부의 뒤에, a요소를 생성해라!
  //     show.append('<a>이동하기</a>'); // shw내부의 뒤에, a요소를 삽입해라!(생성)
  //     show.find('a').attr({href:myLink, title:myLink, target:'_blank'});
  //   }
  // });

// 4
  var linkPage = [
      {text:'naver'      , link:'http://naver.com'},
      {text:'google'     , link:'http://google.com'},
      {text:'daum'       , link:'http://daum.net'},
      {text:'w3schools'  , link:'http://w3schools.com'},
      {text:'codepen'    , link:'http://codepen.io'},
      {text:'cssawards'  , link:'http://cssawards.com'},
      {text:'pinterest'  , link:'http://pinterest.com'},
      {text:'behance'    , link:'http://behance.com'},
      {text:'jquery'     , link:'http://jquery.com'},
      {text:'sass'       , link:'http://sass-lang.com'}
      ];

 var i = 0;
 var linkPageLength = linkPage.length;
 for(; i<linkPageLength; i++){
  btnBox.append('<button type="button"></button>');
  btnBox.children('button').eq(i).text( linkPage[i].text );
 }

  var btn = btnBox.children('button');

  btn.on('click',['button'], function(e) {
    e.preventDefault();

    var _this = $(this);
    var _thisI = _this.index();
    console.log(_thisI);
    var showA = show.find('a').length;
    // 하나의 조건(a의 존재유무)만 판단하므로 else는 필요 없다.
    if(!showA > 0){ show.append('<a target="_blank"></a>'); }
    
    show.find('a').text(linkPage[_thisI].text +' 이동하기');
    show.find('a').attr({href:linkPage[_thisI].link, title:linkPage[_thisI].link});
  });


})(this.jQuery);
