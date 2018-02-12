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


  moreBtn.on('click',function(e) {
    e.preventDefault();
    var end = start+view;

    if(start < listLiLength){

      for(; start < end; start++){
        listLi.eq(start).fadeIn();
        // console.log(start);

          if(start >= listLiLength-1){ 
            moreBtn.hide(); 
            break;
          }

      }// for

    }else{  moreBtn.hide();  }// if

  });

  moreBtn.find('button').on('keydown',function(event) {
    console.log(event.key, event.keyCode);
    // tab 9, ese 27, enter 13
    $(document).unbind('keydown');
    console.log(start-view);
    switch(event.keyCode){
      case 9:
        listLi.eq(start-view-1).find('a').focus();
      break;
      case 27:
        $(this).blur();
      break;
      case 38:
         listLi.eq(start-view).find('a').focus();
      break;
      case 40:
         $(this).trigger('click');
      break;
    }
  });

//주의사항: 전체에서 현재 보이는 내용말고는 없는지?


})(this.jQuery);