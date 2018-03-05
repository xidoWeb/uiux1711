// mousewheel_01.js
(function($) {
  // mousewheel, DOMMouseScroll
  var headBox = $('#headBox');

  var scrollEvent = true;
  $(window).on('mousewheel DOMMouseScroll',function(e) {
    // console.log(e);
    var E = e.originalEvent;
    var delta = 0;
    // console.log(E);
    // console.log(E.detail);  // firefox에만 존재(3의 수치)
    // console.log(E.wheelDelta); // other에만 존재(120의수치)
  
    if(scrollEvent){
      // ----------------------------------------------
      scrollEvent = false;
      // (E.detail) ? delta = E.detail * 40 : delta = -E.wheelDelta; 
      (E.detail) ? delta = 1 : delta = -1; 
      console.log(delta);

      if(delta > 0){ 
        headBox.stop().animate({top:-100},300, function() { scrollEvent = true; }); 
      }else if(delta < 0){ 
        headBox.stop().animate({top:0},300, function() { scrollEvent = true; }); 
      }
     // ---------------------------------------------  
    }// if(scrollEvent)

  });
})(this.jQuery);