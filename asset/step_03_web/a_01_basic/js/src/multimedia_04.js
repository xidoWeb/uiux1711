//  multimedia_04.js
(function($) {
  // jquery
  // 위치값 , 목록, 음악 갯수
  var baseURL = "../multi/video/";
  var videoList = [
      {title:'asIfItYourLast_BLACKPINK' , singTit:'마지막 처럼'   , singer:'BLACKPINK'},
      {title:'heartShaker_TWICE'        , singTit:'heartShaker'   , singer:'TWICE'},
      {title:'parade_YOUNHA'            , singTit:'parade'        , singer:'YOUNHA'},
      {title:'peekABoo_RedVelvet'       , singTit:'피카부'        , singer:'RedVelvet'},
      {title:'playingWithFire_BLACKPINK', singTit:'불장난'        , singer:'BLACKPINK'},
                  ];
  var videoLength = videoList.length;
// --------------------------------------------------------------
//  video 태그에 첫번째 곡 담기
  var video = $('.video_player').find('video');
  var i = 0;
  // baseURL + videoList[i].title + '.mp4';
  video.append('<source src="'+ baseURL + videoList[i].title + '.mp4'+'" type="video/mp4">');
  var videoSource = video.find('source');
// -------------------------------------------------------------
// 버튼을 생성해서 기능부여하기
var play, pause, backward, forward; 
    play     = $('.play');     // 재생버튼
    pause    = $('.pause');    // 일시정지 버튼
    backward = $('.backward'); // 이전영상 재생버튼
    forward  = $('.forward');  // 다음영상 재생버튼

play.on('click', function(e){
  e.preventDefault();
  // video[0].load();
  video[0].play();
});

pause.on('click', function(e){
  e.preventDefault();
  video[0].pause();
});

backward.on('click', function(e){
  e.preventDefault();
  i--;
  if(i < 0){ i = videoLength - 1; }

  videoSource.attr({'src':baseURL + videoList[i].title + '.mp4'});  
  video[0].load();
  video[0].play();
});

forward.on('click', function(e){
  e.preventDefault();
  i++;
  if(!(i < videoLength)){ i = 0; } 

  videoSource.attr({'src':baseURL + videoList[i].title + '.mp4'});   
  video[0].load();
  video[0].play();
});
// -------------------------------------------------------
//  목록만들기
var content = $('.contentList');
content.append('<ul></ul>');
var contentBox = content.find('ul');
for(var j = 0; j < videoLength; j++){
  contentBox.append('<li><button type="button"><strong>제목: </strong>'+ 
                      videoList[j].singTit + ' ' + 
                      '<strong>가수명: </strong>'+
                      videoList[j].singer + 
                      '</button></li>');
}
content.css({width:'30%', float:'left'});
contentBox.css({color:'#09a'});
contentBox.find('button').css({backgroundColor:'transparent', color:'inherit', padding:'0.1rem'});
contentBox.find('strong').css({fontWeight:'bold'});

// li 클릭하여 순서체크기하기
contentBox.children('li').on('click',function(e) {
  e.preventDefault();
  i = $(this).index();
  videoSource.attr({'src':baseURL + videoList[i].title + '.mp4'});
  video[0].load();
  video[0].play();
});

})(this.jQuery);