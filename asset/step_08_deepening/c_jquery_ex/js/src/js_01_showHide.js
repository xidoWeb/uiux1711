// js_01_showHide.js
(function($) {

  // show(), hide(), toggle()
  // fadeIn(), fadeOut(), fadeToggle()
  // slideDown(), slideUp(), slideToggle()
  // addClass(), removerClass(), toggleClass()

  // 선택자.on('click', 콜백함수(인수){ 인자.preventDefault(); });

// 1.
// 선택자 가져오기
 var btn = $('#navigation').find('li');
 var par = $('p'); 
 var tr  = [
            show(), 
            hide(), 
            toggle(), 
            fadeIn(), 
            fadeOut(), 
            fadeToggle(), 
            slideDown(), 
            slideUp(), 
            slideToggle(), 
            addClass("show"),
            removeClass("show"),
            toggleClass("show")];

 btn.on('click', ['a'], function(e){
  e.preventDefault();
  // console.log( $(this).index() );
  var i =  $(this).index();
  par.tr[i];
  // switch(i){
  //   case 0:
  //   par.show();               break;
  //   case 1:
  //   par.hide();               break;
  //   case 2:
  //   par.toggle();             break;
  //   case 3:
  //   par.fadeIn();             break;
  //   case 4:
  //   par.fadeOut();            break;
  //   case 5:
  //   par.fadeToggle();         break;
  //   case 6:
  //   par.slideDown();          break;
  //   case 7:
  //   par.slideUp();            break;
  //   case 8:
  //   par.slideToggle();        break;
  //   case 9:
  //   par.addClass('show');     break;
  //   case 10:
  //   par.removeClass('show');  break;
  //   default:
  //   par.toggleClass('show');
  // }
});


})(this.jQuery);