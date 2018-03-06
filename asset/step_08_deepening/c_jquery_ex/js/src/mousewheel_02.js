// mousewheel_02.js
(function($) {
  var arr = [];
  var scrollView = $('.scroll_view');
  var i = 0;
  var sLength = scrollView.length;
  for(; i < sLength; i++){ arr[i] = scrollView.eq(i).offset().top; }
  console.log(arr);

  var viewEq = 0;
  var scrollEvent = true;
  $(window).on('mousewheel DOMMouseScroll',function(e) {
    var E = e.originalEvent;
    var delta = 0;
    if(scrollEvent){
      // scrollEvent = false;
      (E.detail) ? delta = E.detail / 40 : delta = -E.wheelDelta/120; 
    }
    viewEq += delta;

    $(window).scrollTop( arr[viewEq] );

    console.log(delta);
  });

 


})(this.jQuery);