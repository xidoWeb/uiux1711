// multimedia_03.js

(function($) {

  var audio = $('audio');

  audio.append('<source>');
  
  var audioSrc = audio.find('source');
  audioSrc.attr({'src':'../multi/audio/veil.mp3','type':'audio/mp3'});

  var play = $('.play');
  play.on('click', function(e){
    e.preventDefault();
    audio[0].load();
    audio[0].play();
  });

  var next = $('.next');
  next.on('click', function(e) {
    e.preventDefault();
    audioSrc.attr({'src':'../multi/audio/Touchdown.mp3','type':'audio/mp3'}); 
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
    audioSrc.attr({'src':'../multi/audio/DoItAgain.mp3','type':'audio/mp3'}); 
    audio[0].load();
    audio[0].play();
  });

})(this.jQuery);