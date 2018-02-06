// js_gallery_image_03.js

(function($) {  

 $.fn.myGallery = function(dataUrl, baseImageFolder) {
  // 기본 형태 제작
  // var galleryBox = $('#galleryBox');
  var galleryWrapBox;
    if(this.attr('id')){
      // console.log('find idName');
      galleryWrapBox = '#'+this.attr('id');
    }else if(this.attr('class')){
      // console.log('find className');
      galleryWrapBox = '.'+this.attr('class');
    }
    console.log(galleryWrapBox);

  // this는 자바스크립트의 this를 의미함.
  // 간단하게 설명하자면, 여기서 this는 선택자! 즉 실행함수(메소드) 앞에 존재하는 선택자를 말한다.
  var galleryBox = this; 
  galleryBox.append('<div class="gallery_view"><p class="hidden"></p></div>');
  galleryBox.append('<div class="gallery_list"><ul></ul></div>');
  var galleryView = $('.gallery_view');
  var galleryList = $('.gallery_list');
  var galleryUl = galleryList.children('ul');

  // 각 사용될 이미지위치 체크
  // var baseUrl = '../../img/gallery_img_01/';
  var baseUrl = baseImageFolder;
  var bigUrl = baseUrl + 'big/';
  var thumUrl = baseUrl + 'thum/';

  // html문서에 css(style) 삽입하기 -------------------
  // style태그 존재유무 판단
 var styleHas = $('head').find('style').length;
 // style태그가 없을겨우 생성
 if(!styleHas > 0){$('head').append('<style></style>');}

 $('head').find('style').append( galleryWrapBox+'{width: 100%; height: auto; box-sizing:border-box; padding: 0.5rem;}' ); 
 $('head').find('style').append( galleryWrapBox+'>.gallery_view{width: 100%; height: 550px; background-color: #acc; box-sizing:border-box; border:1px solid #cca; margin-bottom: 1rem; border-radius:1rem; background-repeat:no-repeat; background-position: center; background-size:cover;}' );
 $('head').find('style').append( galleryWrapBox+'>.gallery_list{width: 100%; height: auto;}' );
 $('head').find('style').append( galleryWrapBox+'>.gallery_list>ul{width: 100%; height: auto;}' );
 $('head').find('style').append( galleryWrapBox+'>.gallery_list>ul>li{width: 18%; height:120px; margin:1%; float: left;}');
 $('head').find('style').append( galleryWrapBox+'>.gallery_list>ul>li>button{width: 100%; height: 100%; background-color: #aaf; border-radius:0.7rem; background-repeat:no-repeat; background-position: center; background-size:cover;  box-shadow:0.1rem 0.1rem 0.1rem rgba(0,0,0,0.3);}');

  // .append('<style></style>');

  // 가져올 파일 경로 설정
  // $.getJSON(불러올파일명, functiopn(불러온파일데이터가 담기는곳){});
  // var jsonUrl = '../../js/data/galleryImage_01.json';
  var jsonUrl = dataUrl;
  $.getJSON(jsonUrl, function(data) {
    // 가져온 파일 검증
    // console.log(data);
    $.each(data, function(index, value) {
      // data 불러오기 체크(검증)
      // console.log(index+': '+value.thum);
      galleryUl.append('<li><button type="button"><span class="hidden">' + value.thum + '</span></button></li>');
      galleryUl.children('li').eq(index).children('button')
               .css({'backgroundImage':'url('+ thumUrl+value.file +')'});
    });// $.each()

    // 첫이미지/내용 메인에 삽입
    galleryView.css({backgroundImage:'url(' + bigUrl + data[0].file + ')'});
    galleryView.find('p').text( data[0].big );

    // 클릭하기 위한 기능사용(getJSON메소드를 통해 처리된 기능을 사용함 -------
    var galleryBtn = galleryUl.children('li');
    galleryBtn.on('click',function(e) {
      e.preventDefault();
      var thisI = $(this).index();
      console.log(thisI);
      galleryView.css({backgroundImage:'url(' + bigUrl + data[thisI].file + ')'});
      galleryView.find('p').text( data[thisI].big );
    });
// -------------------------------------------------------------------
  }); // $.getJSON()

}; // 플러그인 myGallery 생성!!!

})(this.jQuery);


