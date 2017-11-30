// slideBanner_01.js

// 즉시 실행 함수(IIFE)
(function($){
// jQuery

  $('.banner>ul>li').last().prependTo('.banner>ul');
  $('.banner>ul').css({marginLeft:'-100%'});
  $('.banner').css({overflow:'hidden'});

})(this.jQuery);

// 함수의 종류
/* 
1. 함수 선언식: 
 - 먼저 호출하고, 나중에  함수기능을 작성해도 문제없이 동작
 - 초기 작업시, 가장 큰 범위의 작업
 Fn();
 function Fn(){}

2. 함수 표현식:
 - 먼저 작업후에 호출해야만 동작; 
 - 큰범위의 함수 내부에서 동작처리할때 
 var Fun = function(){ };
 Fun();

3. 즉시 실행함수(익명함수)
- 별도의 호출이 필요 없을때 사용
- 외부의 접근을 강제로 막을때 
 ( funtion($){} )(this.jQuery);
 ( funtion(){}() );


*/

