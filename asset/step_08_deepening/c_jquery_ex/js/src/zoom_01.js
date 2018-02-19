// zoom_01.js
(function($) {
	var thum = $('.thum');
	var big  = $('.big');
	var thumW = thum.outerWidth();
	var thumH = thum.outerHeight();

	big.hide();
	
	thum.on('mousemove',function(evt) {
		big.fadeIn();
		var w = evt.offsetX / thumW * 100;
		var h = evt.offsetY / thumH * 100;
		var pw = parseInt(w);
		var ph = parseInt(h);
		big.css({backgroundPosition:pw+'% '+ ph+'%'});
	});
  thum.on('mouseleave',function(evt) {
  	big.fadeOut();
  });

})(this.jQuery);

/*
1. clientX, clientY
위 메서드는 클라이언트 영역 내의 가로,세로 좌표를 제공합니다. 
여기서 클라이언트 영역은 현재 보이는 브라우저 화면이 기준이 됩니다.
- clientX : 브라우저 페이지에서의 X좌표 위치를 반환하나 스크롤은 무시하고 해당 페이지의 상단을 0으로 측정합니다.
- clientY : 브라우저 페이지에서의 Y좌표 위치를 반환하나 스크롤은 무시하고 해당 페이지의 상단을 0으로 측정합니다.

2. offsetX, offsetY
위 메서드는 이벤트 대상이 기준이 됩니다. 
(화면 중간에 있는 박스 내부에서 클릭한 위치를 찾을 때 해당 박스의 왼쪽 모서리 좌표가 0이됩니다. 화면의 기준이 아닙니다)
전체 문서를 기준으로 합니다(스크롤 화면 포함)
- offsetX : 이벤트 대상 객체에서의 상대적 마우스 x좌표 위치를 반환합니다.
- offsetY : 이벤트 대상 객체에서의 상대적 마우스 y좌표 위치를 반환합니다.

3. pageX, pageY
위 메서드는 전체 문서를 기준으로 x,y 좌표를 반환 합니다. 
스크롤 화면을 포함해서 측정합니다.
- pageX : 브라우저 페이지에서의 x좌표 위치를 반환합니다.
- pageY : 브라우저 페이지에서의 Y좌표 위치를 반환합니다.

4. screenX, screenY
위 메서드는 모니터 화면을 기준으로 좌표를 제공합니다. 
여기서 중요한 점은 브라우저 화면이 아니라 자신의 모니터 화면 전체를 기준으로 좌표를 측정한다는 점입니다.
- screenX : 전체 모니터 스크린에서의 x좌표 위치를 반환합니다.
- screenY :전체 모니터 스크린에서의 y좌표 위치를 반환합니다.

* 한번 더 정리하겠습니다.

offset 메서드는 이벤트가 걸려 있는 DOM객체를 기준으로 좌표를 출력합니다. 
이와 비슷한 메서드로 layer가 있습니다. 이 메서드는 현재 파이어폭스에서만 사용합니다.
screen 메서드는 화면 출력 크기(자신의 모니터)가 기준인 절대 좌표입니다. 브라우저를 움직여도 값은 같습니다.
client 메서드는 브라우저가 기준인 좌표입니다. 
현재 보이는 브라우저 화면 상에서 어느 지점에 위치하는 지를 의미하기 때문에 스크롤 해도 값은 변하지 않습니다.
page 메서드는 문서가 기준입니다. 
client와 비슷하지만 이 메서드는 문서 전체 크기가 기준이라 스크롤 시 값이 바뀝니다. 
(스크롤을 포함해서 측정합니다)
*/