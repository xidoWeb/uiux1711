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


})(this.jQuery);