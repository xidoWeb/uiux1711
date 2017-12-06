// jquery_base_method_01.js

(function($){
  
    var headBox = $('#headBox');
    var headOffset = headBox.offset().top; 
    console.log(headOffset);

    $(window).on('scroll', function(){
      var winScroll = $(this). scrollTop();
      // console.log(winScroll);

      if(headOffset <= winScroll){
        headBox.addClass('fixed');
      }else{
        headBox.removeClass('fixed');
      }

    });

})(this.jQuery);