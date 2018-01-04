// multimedia_03.js

(function($) {
// 경로 및 목록만들기
  var baseURL = "../multi/audio/";
  var musicList = [
                   {title:'veil'},
                   {title:'CheerU'},
                   {title:'DoItAgain'},
                   {title:'Touchdown'},
                  ];
  var musicListLength = musicList.length;

// 오디오태그에 기본 내용 삽입하기
  var audio = $('audio');
  audio.append('<source>');
  
  var audioSrc = audio.find('source');
  var i = 0;
  // baseURL + musicList[i].title + '.mp3' // 기본내용삽입
  audioSrc.attr({'src': baseURL + musicList[i].title + '.mp3','type':'audio/mp3'});

// play 버튼 클릭시, 오디오 재생하기
  var play = $('.play');
  play.on('click', function(e){
    e.preventDefault();
    audio[0].load();
    audio[0].play();
  });

  var next = $('.next');
  next.on('click', function(e) {
    e.preventDefault();

    i++; 
    if(i < musicListLength){
      audioSrc.attr({'src':baseURL + musicList[i].title + '.mp3',
                     'type':'audio/mp3'}); 
    }else{
      i = 0;
      audioSrc.attr({'src':baseURL + musicList[i].title + '.mp3',
                   'type':'audio/mp3'}); 
    }
    audio[0].load();
    audio[0].play();
  });

  var pause = $('.pause');
  pause.on('click',function(e) {
    e.preventDefault();
    audio[0].load();
    audio[0].pause();
  });

  var prev = $('.prev');
  prev.on('click',function(e) {
    e.preventDefault();
    i--; // 0 -1
    if(i < 0){
      i = musicListLength - 1; //3
      audioSrc.attr({'src':baseURL + musicList[i].title + '.mp3',
                   'type':'audio/mp3'});
    }else{
      audioSrc.attr({'src':baseURL + musicList[i].title + '.mp3',
                   'type':'audio/mp3'});
    }
    audio[0].load();
    audio[0].play();
  });

})(this.jQuery);