// js_modal_01.html
(function($) {
  // 기본 선택자 가져오기
  var modalBox  = $('#modalBox');
  var modalView = modalBox.find('.view_box');
  var modalList = modalBox.find('.list_box');
  var modalLi   = modalList.find('li');

  // modalView.hide();
  modalView.hide();
  modalView.find('button').hide();
  
  modalLi.on('click',function(e) {
    e.preventDefault();
    var data = $(this).find('img').attr('src');
    var dataAlt = $(this).find('img').attr('data-alt');
    // console.log('가져온파일: ', data);

    var myData = data.split('/');
    // console.log('배열로 변경: ', myData);

    // var file = myData.slice(-1)[0];
    var file = myData.pop(); // 파일명
    // console.log('별도로 처리할 파일: ', file);

    myData.pop(); // 선택한 이미지의 폴더명

    // 재결합 경로명
    var joinDir = myData.join('/')+'/big/';
    // console.log('바뀔 폴더: ', joinDir);

    // 바뀔 폴더 및 파일
    var reFile = joinDir+file;
    // console.log('바뀔 폴더 및 파일: ', reFile);



    modalView.find('img').attr({'src':reFile, 'alt':dataAlt});
    modalView.show(500, function() {
      $(this).find('button').fadeIn(300);
    });
  });

  modalView.find('button').on('click',function(e) {
    e.preventDefault();
    // $(this).parent().fadeOut();
    $(this).fadeOut(300,function() {
      modalView.hide(500);
    });
  });


  // 배열은 참조변수(주소값을 기억하는 변수)
  // var a = [1,4,5,6,7,9];
  // var b = a;
  // var b[3] = 30; // a[3] => 30
  // var c = b.pop() // 9 , [1,4,5,30,7]


})(this.jQuery);