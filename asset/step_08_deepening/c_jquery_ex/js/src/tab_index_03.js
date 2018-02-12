// tab_index_02.js
(function($) {
  
  var listArea = $('.list_area');
  var listWrap = listArea.find('ul');
  var listLi   = listWrap.children('li');
  var listLiLength = listLi.length;
  console.log(listLiLength);
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
    console.log(start-view);
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
  console.log(event.key, event.keyCode);
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

})(this.jQuery);