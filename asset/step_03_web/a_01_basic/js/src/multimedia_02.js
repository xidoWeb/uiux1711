//  multimedia_02.js
(function($) {
  // step_01-1. play버튼 클릭시 재생되게만들고,
  // step_01-2. pause버튼 클릭시 멈춤처리되게 만들기


function btn(){
  var play = $('.play');
  var pause = $('.pause');
  var audio = $('.audio_file').find('audio')[0];
  // multi 기능을 가진 요소(video, audio)를 선택해서, 
  // 내부에 어떠한 기능을 처리하는것은 선택자 뒤에 사용할 기능을 입력하면되고, 
  // 이외의 다른 메소드처리 즉, 이벤트기능 자체를 가진 메소드를 처리할때에는(play(), pause()) 뒤에 해당하는 멀티형식의 배열순서값([0])을 가진다.


  play.on('click',function(e) {
    e.preventDefault();
    // console.log(audio);
    audio.play();
  });
  pause.on('click',function(e) {
    e.preventDefault();
    // console.log(audio);
    audio.pause();
  });
}

 // step_02. source 를 생성해서 파일을 직접 담아서 처리
 var audio = $('.audio_file').find('audio');
 // audio.append('<source src="../multi/audio/DoItAgain.ogg" type="audio/ogg">');
 // audio.append('<source src="../multi/audio/DoItAgain.mp3" type="audio/mp3">');
 
 // step_03. 별도의 파일을 이용하여 음악 목록을 생성하고, 재생처리하도록 만들기!!!
 // step_03-1. 목록생성하고, 하나만 일단 첨부
 var musicUrl = "../multi/audio/";
 var musicList = [
                  {title:'CheerU'    , singer:'Twice'},
                  {title:'DoItAgain' , singer:'Twice'},
                  {title:'Touchdown' , singer:'Twice'},
                  {title:'veil'      , singer:'이승기'},
                 ];

  var cheerU1 = musicUrl + musicList[3].title + '.ogg';
  audio.append('<source src="' + cheerU1 + '" type="audio/ogg">');
  var cheerU2 = musicUrl + musicList[3].title + '.mp3';
  audio.append('<source src="' + cheerU2 + '" type="audio/mp3">');


 btn();
})(this.jQuery);