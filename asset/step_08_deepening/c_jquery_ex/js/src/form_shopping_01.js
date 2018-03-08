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

  var num = 1;
  var more = 0;
  var send = 0;
  
  // 1. 기본금액 만들기

  var  basePrice = $('dd.price').children('span').text();
  var  bp = parseInt( basePrice.replace(',','') );
  // console.log( bp );


  // 결과 체크
  var result = $('.result').find('span');
  var resultFn = function(num,more) {
    var count = num || 1, more = more;
    var resultPrice = bp*count+more;
    var totalR = resultPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    result.text(totalR);
    // console.log(num,more);
  };
  resultFn(num,more);

   // 2. 수량 입력(+,-) 기능과 해당금액 가져오기
   var amountBtn = $('dd.select').find('button');
   var countInput = $('#num');
   //console.log(amountBtn);

// 값 버튼으로 클릭
  /* 
    // 방법1: each문으로 사용
    $.each(amountBtn,function(i,v) {
     $(this).on('click',function() {
       // console.log(i)
       (i == 0) ? console.log('minus'): console.log('plus');
     });
    });
    */
  //방법2 html문서에 class값 입력하여 사용
  amountBtn.on('click',function(e) {
    e.preventDefault();
    var btnI = $(this)[0];
    // console.log(btnI);
    if(btnI == $('.minus')[0]){ (num <= 1) ? num = 1 : num--;  }else{  (num >= 10) ? num = 10 : num++;  }
    countInput.val(num);
    resultFn(num,more);
  });

// 수량 직접입력
  countInput.on('change',function() {
    num = parseInt($(this).val());
    resultFn(num,more);
  });

// 옵션 선택
  var optionProduct = $('#optionProduct');
  optionProduct.on('change',function(e) {
    more = $(this).children('option:selected').data('price');
    if( more==undefined ){ more=0;}
     // console.log(more);
    resultFn(num,more);
  });


  // 택배배송 여부 
  // var sendQue = $('dd.send').find('input');
  // sendQue.on('change', function(e) {
  //   e.preventDefault();
  //   $(this).prop('checked',true);
  // });
  // ---------------------------------------------
})(this.jQuery);