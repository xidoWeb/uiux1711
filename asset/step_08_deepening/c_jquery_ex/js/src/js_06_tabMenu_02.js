// js_06_tabMenu_02.html
(function($) {
  var tabMenu = $('#tabMenu');
  var tabUl = tabMenu.children('ul');
  var tabLi = tabUl.children('li');
  var content = $('.menu_content');

  tabLi.on('click',['button'], function(){
    var index = $(this).index();
    console.log(index);
    var myIndex = content.children('div').eq(index);
    myIndex.stop().slideDown();
    myIndex.siblings('div').stop().slideUp();
  });

})(this.jQuery);