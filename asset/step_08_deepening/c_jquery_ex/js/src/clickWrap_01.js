// clickWrap_01.js
    (function($) {
      // --------------------------------------
      // loading(0.8초 로딩) ============================================================
      var timed = 800;
      // setTimeout(function() { 
        $('body.loading').fadeOut(timed/4,function() {
          $(this).removeClass('loading').removeAttr('style');
        }); 
      // },timed*5);

      // --------------------------------------
      // 약관 내용보기 ============================================================
      // 약관 보기 버튼 클릭시 내용처리(보기/사라지기)
      var viewCheck = $('.check').find('button');
      viewCheck.on('click',function(e) {
        e.preventDefault();
        $(this).next().toggle();
      });

      // 약관 버튼 blue 처리시 내용숨기기 
      viewCheck.on('blur',function(e) {
        e.preventDefault();
        $(this).next().hide();
      });

      // 버튼 focus처리시 손가락 이동 ============================================================
      var contentBox = $('#contentBox');
      var inputCheck = $('[type="checkbox"], .check_btn');
      var showFinger = $('.show_finger');
      var contentOffsest = contentBox.offset().top;

      inputCheck.on('focus',function(e) {
        e.preventDefault();
        var thisOffset = $(this).offset().top - contentOffsest;
        // console.log(thisOffset);
        showFinger.css({top:thisOffset});
        showFinger.addClass('move');

      });

      inputCheck.on('blur',function(e) {
        e.preventDefault();
        showFinger.removeClass('move');
      });
      // 동의 체크 ============================================================
      // 전체 동의
      var checkInput = $('[type="checkbox"]');
      var inputLength = checkInput.length;
    
      // 각각 체크 기능
      var forCheck = function() {
        var myCk;
        var i = inputLength-1;
        for(;i >= 0; i--) {
          myCk = checkInput.eq(i).hasClass('checked');
          // 하나라도 존재하지 않는다면 거짓으로 판단하고 빠져나가기
          if(!myCk){break;}
        };
        console.log(myCk);
        // false 경우에는 전체동의 해제, true일 경우에는 전체동의 체크
        (myCk) ? allCheck.addClass('checked') : allCheck.removeClass('checked');
      }

      // --------- 전체 체크 처리함수
      var allCheckFn = function(type,bool) {
        $.each(checkInput,function(i,v) {
          var _this = $(this);
          if(bool){
            _this.addClass('checked');
            _this.prop('checked',true);
          }else{
            _this.removeClass('checked');
            _this.prop('checked',false);
          }
        });
      }; //allCheckFn
    
      // ---------- 부분 체크시 처리함수
      var partCheckFn = function(type, bool) {
        var _this = type, boolType = bool;
        // console.log(_this);
          if(boolType){
            _this.addClass('checked');
            _this.attr('checked',true);
          }else{
            _this.removeClass('checked');
            _this.attr('checked',false);
          }
          forCheck();
      }; // patCheckFn
// -----------------------------------------------------

      var allCheck = $('.all_check').find('button');
      allCheck.on('click',function(e) {
        e.preventDefault();

        allCheck.toggleClass('checked',function() {
          // 전체동의버튼선택으로 .checked가 설정되며, 이를 판단여부에따라 각각의 버튼 선택
          var allCheck = $(this).hasClass('checked');
          ( allCheck ) ? allCheckFn(checkInput,true): allCheckFn(checkInput,false);
        }); //allCheck.toggleClass('checked')
      }); //allCheck.on('click')
// ----------------------------------------------------

      // 부분 동의
      var labelCheckBtn = $('label.check_btn');
        // 해당하는 내용의 변화를 감지처리로 수정
      checkInput.on('change',function(e) {

        var _this = $(this);
        var hasCheck = _this.hasClass('checked');
        // console.log(hasCheck);
        partCheckFn(_this,!hasCheck);

      });

      // 부분 선택 전체감시
        // - 하나씩 선택시 전체를 감지하여 
        // - 하나라도 풀리면 전체 동의 버튼 체크 해제, 
        // - 전체선택하면 전체 동의 버튼 체크 확인하기
        // - 함수기능으로 처리하여, 부분체크시 처리되는 기능에 담기
      // --------------------------------------
    })(this.jQuery);