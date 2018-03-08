// form_shopping_01.js
(function($) {
  // ---------------------------------------------
  /* 
    * 목표: 기본 금액에서, 수량과, 옵션, 배송비금액을 선택하여 최종금액에 결과 만들기!
    1. 기본금액 가져오기
    2. 수량 입력(+,-) 기능과 해당금액 가져오기
    3. 추가 옵션 선택시 추가금액 확인하여 가져오기
    4. 택배요금 포함여부 확인하여 금액 가져오기
    5. 1~5내용을 합산하여 총금액에 결과 도출하기
  */
  // 1. 기본금액 만들기
  var  basePrice = $('dd.price').children('span').text();
  var  bp = parseInt( basePrice.replace(',','') );
  // console.log( bp );

   // 2. 수량 입력(+,-) 기능과 해당금액 가져오기
   var amountBtn = $('dd.select').find('button');
   var countInput = $('#num');
   var num = 1;

   // console.log(amountBtn);
   // $.each(amountBtn,function(i,v) {
   //  $(this).on('click',function() {
   //    // console.log(i)
   //    (i == 0) ? console.log('minus'): console.log('plus');
   //  });
   // });

   amountBtn.on('click',function(e) {
    e.preventDefault();
    var btnI = $(this)[0];
    // console.log(btnI);
    if(btnI == $('.minus')[0]){
      (num <= 1) ? num = 1 : num--;
    }else{
      (num >= 10) ? num = 10 : num++;
    }
    countInput.val(num);
    // console.log(num);
   });


  // ---------------------------------------------
})(this.jQuery);