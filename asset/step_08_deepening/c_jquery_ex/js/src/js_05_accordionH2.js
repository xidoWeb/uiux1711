// js_05_accordionH1.js
(function($) {
  var dl = $('dl');
  var basicDlLeft = [];
  var i = 0;
  var myLeft;
  for(; i < dl.length; i++){
    myLeft = dl.eq(i).css('left');
    basicDlLeft[i] = parseInt(myLeft);
  }
  console.log(basicDlLeft);

  var dtLink = $('dt');
  dtLink.on('click', function(e){
    e.preventDefault();
    var _thisI = $(this).parent().index();
    // console.log(_thisI);
    // dl.eq(_thisI).animate({left:64 * _thisI + 'px'}); //test

    for(var j = _thisI ; j > 0; j--){  dl.eq(j).css({left:64 * j + 'px'});  }
    dl.eq(_thisI).nextAll().removeAttr('style');
  });
})(this.jQuery);