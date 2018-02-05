// js_gallery_image_01.
(function($) {
  // background-image를 사용하기

  var galleryView = $('.gallery_view');
  var url         = '../../img/gallery_img_01/';
  var thumUrl     = url+'thum/';
  var bigUrl      = url+'big/';
  var galleryList = $('.gallery_btn').children('ul').children('li');
  var i           = 0;

  for(;i < galleryList.length; i++){
    galleryList.eq(i).find('button').css({backgroundImage:'url(' + thumUrl + 'gallery_image_' + (i+1) + '.jpg)'});
  }
  // list 클릭
  galleryList.on('click',function(e) {
    e.preventDefault();
    var thisI = $(this).index() + 1;
    galleryView.css({backgroundImage:'url(' + bigUrl + 'gallery_image_' + thisI + '.jpg)'});
  })

})(this.jQuery);