// mousewheel_01.js
(function($) {
  // mousewheel, DOMMouseScroll
  var scrollEvent = true;
  $(window).on('mousewheel DOMMouseScroll',function(e) {
    // console.log(e);
    var E = e.originalEvent;
    var delta = 0;
    // console.log(E);
    // console.log(E.detail);  // firefox에만 존재(3의 수치)
    // console.log(E.wheelDelta); // other에만 존재(120의수치)

    
    if(scrollEvent){
      scrollEvent = false;
      if(E.detail){
        // delta = 1; 
        delta = E.detail * 40; 
      }else{
        // delta = -1;
        delta = -E.wheelDelta;
      }
      


      
      // scrollEvent = false;
    }

    console.log(delta);
  });
})(this.jQuery);