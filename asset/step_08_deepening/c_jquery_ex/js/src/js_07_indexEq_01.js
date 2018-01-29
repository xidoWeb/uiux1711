// js_07_indexEq_01.js
(function($) {
  // 1. 선택한 순서에 맞는 .box내의 div를 addClass 적용하기
  // 2. 선택한 버튼이 몇번째인지 체크하고 해당 .show내부의 p에 선택한 버튼의 순서를 알려주기
  // 3. 선택한 버튼 내부에 별도의 속성값을 사용하여 이동할 링크를 저장하고, 
  // 3-1. 클릭시 .show>p에 링크태그를 생성하여 해당 값을대입하여 이동버튼으로 변경처리
  // 4. 3번의 속성값(링크할 위치)를 객체형식으로 처리하여 사용.

  //1
  var btn = $('.btn').children('button');
  var box = $('.box').children('div');

  btn.on('click',function(e) {
    e.preventDefault();
    var _this = $(this);
    // console.log( _this.index() );
    var _thisI = _this.index();

    box.eq(_thisI).addClass('active');
    box.eq(_thisI).siblings('div').removeClass('active');
    $('.show').children('p').text( (_thisI+1)+'번째 버튼을 선택하였습니다' );
  });

  //2
  // $.each(btn,function(index, value) {
  //   $(this).on('click',function() {
  //     // console.log(index);
  //     $('.show').children('p').text( (index+1)+'번째 버튼을 선택하였습니다' );
  //   })
  // });
})(this.jQuery);
// 3-1. 