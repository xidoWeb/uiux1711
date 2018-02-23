// scroll_image_01.js
(function($) {
  var scrollBox = $('#scrollBox');
  var i = 1;
  var counter = 193;
  var imgUrl = '../../img/scroll_image/watch/';
  for(; i <= counter; i++){
    scrollBox.append('<img>');
    scrollBox.find('img')
             .eq(i-1)
             .attr({alt:'시계이미지', 
                    src:imgUrl+'Layer '+i+'.png' });
  }

scrollBox.find('img').eq(0).show();

// 마우스 이동시 이미지변환
var imgWidth = scrollBox.find('img').width();

scrollBox.on('mousemove',function(evt) {
  var evtX = evt.offsetX;
      // 현크기 / 전체기준 * 193
  var fileN =  parseInt(evtX  / imgWidth * 193);
  console.log(fileN);
  scrollBox.find('img').hide();
  scrollBox.find('img').eq(fileN).show();
});

})(this.jQuery);