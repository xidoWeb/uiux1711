# javascript 기초6 - <br />정규표현식(Regular Expression)

날이 갈수록 개인정보 보호에 관련하여 보안정책을 점진적으로 강화하고 있습니다. <br /> 이에 따라 Web에서 회원가입 시 Password 설정을 복잡해진 보안정책에 맞추다 보니 복잡하게 조합해야만 정상적으로 가입을 할 수 있습니다.  <br />  이러한 강화된 보안정책 때문에 기존에 사용하던 자신만의 Password를 인위적으로 보안정책에 맞추는 경우가 많을 것입니다.  <br />  그러다 보니, 종종 Log-In을 할 때 Password를 잊어버려서 곤란한 상황이 발생하는 경우도 한번쯤은 있었을 것입니다. 일반적으로 이렇게 복잡한 조건이 필요한 경우 사용자에게 입력을 받을 때 여러 가지 조건을 주면서 정해진 규칙 안에서만 입력을 하도록 유도를 하고 있습니다.  <br /> 이번 프로젝트를 진행하면서 사용자가 입력하여 DB에 형식에 맞도록 저장하기 위해 조건을 주는 부분이 있었는데, 간단하게 해결 하기 위해 정규표현식(Regular Expression)을 사용하였습니다.  <br /> 이 글에서는 정규표현식을 실제로 사용하면서 필요한 정보들을 초보 개발자의 관점에서 해석하고 실제로 사용하는 과정을 담았습니다.

---

[TOC]

---

## 정규표현식이란?

정규표현식의 사전적인 의미로는  <br /> **특정한 규칙을 가진 문자열의 집합을 표현하는데 사용하는 형식 언어**입니다.  <br /> 주로 Programming Language나 Text Editor 등 에서 문자열의 검색과 치환을 위한 용도로 쓰이고 있습니다.  <br /> 입력한 문자열에서 특정한 조건을 표현할 경우 일반적인 조건문으로는 다소 복잡할 수도 있지만,  <br /> **정규표현식을 이용하면 매우 간단하게 표현** 할 수 있습니다.  <br /> 하지만 코드가 간단한 만큼 **가독성이 떨어져서 표현식을 숙지하지 않으면 이해하기 힘들다**는 문제점이 있습니다.

![img](http://www.nextree.co.kr/content/images/2016/09/jhkim-140117-RegularExpression-151-1.png)Regular Expression UML

---

## 정규표현식 표현방법

정규표현식은 표준인 POSIX의 정규표현식과 POSIX 정규표현식에서 확장된 Perl방식의 PCRE가 대표적이며, <br /> 이외에도 수많은 정규표현식이 존재하며 정규표현식 간에는 약간의 차이점이 있으나 거의 비슷합니다. <br /> 정규표현식에서 사용하는 기호를 Meta문자라고 합니다.  <br /> Meta문자는 표현식 내부에서 특정한 의미를 갖는 문자를 말하며,  <br /> 공통적인 기본 Meta문자의 종류로는 다음과 같습니다.



---

![img](http://www.nextree.co.kr/content/images/2016/09/jhkim-140117-RegularExpression-21.png)

 Meta 문자중에 독특한 성질을 지니고 있는 문자클래스'[ ]'라는 문자가 있습니다.  <br /> 문자클래스는 그 내부에 해당하는 문자열의 범위 중 한 문자만 선택한다는 의미이며, <br /> 문자클래스 내부에서는 Meta문자를 사용할 수 없거나 의미가 다르게 사용됩니다.



---

![img](http://www.nextree.co.kr/content/images/2016/09/jhkim-140117-RegularExpression-191.png)

POSIX에서만 사용하는 문자클래스가 있는데, 단축키처럼 편리하게 사용할 수 있습니다.  <br /> 대표적인 POSIX 문자클래스는 다음과 같으며 대괄호'[ ]' 가 붙어있는 모양 자체가 표현식이므로 <br /> 실제로 문자클래스로 사용할 때에는 대괄호를 씌워서 사용해야만 정상적인 결과를 얻을 수 있습니다.

---

![img](http://www.nextree.co.kr/content/images/2016/09/jhkim-140117-RegularExpression-08-1.png)

이밖에도 [:cntrl:] : 아스키 제어문자(0~31번, 127번), [:print:] : 출력 가능한 모든 문자, [:xdigit:] : 모든 16진수 숫자 등이 있습니다.



---

정규표현식을 실제로 사용할 때 **언어마다 사용방법이 각각 다릅니다**.  <br /> 진행했던 프로젝트에서는 정규표현식을 JavaScript에서 사용했는데,  <br /> JavaScript에서 사용하는 방법에 대해서 설명 하겠습니다.  <br /> 사용하는 JavaScript 버전이 1.1이하 버전일 경우에는 정규표현식을 사용할 수 없습니다.  <br /> 정규표현식을 사용하는 방법으로는 **두 가지가 방법이 존재**하며,  <br /> 첫 번째로는 '**RegExp**'객체를 이용하는 방법이 있습니다.  <br /> 주로 정규표현식이 자주 변경되는 경우 사용합니다.

```javascript
// RegExp 객체를 이용하는 방법
var objectInitializer = new RegExp('정규표현식',['Flag']);  
```

두 번째로는 **객체초기화(Object Initializer)**를 사용하는 방법입니다.  <br /> 주로 입력된 표현식이 거의 바뀌지 않는 상수 형태의 표현식을 사용할 때 사용합니다.

```javascript
// 객체초기화(Object initializer) 방법
var regExp = /정규표현식/[Flag];  
```



---

## Flag의 종류

자주 사용하는 Flag는 밑의 3종류가 있으며 Flag를 사용을 하지 않을 수도 있습니다.  <br /> 만약 Flag를 설정 하지 않을 경우에는 문자열 내에서 검색대상이 많더라도 한번만 찾고 끝나게 됩니다.

![img](http://www.nextree.co.kr/content/images/2016/09/jhkim-140117-RegularExpression-09.png)

​                      jhkim-140117-RegularExpression-09

이 외에도 공백을 무시하고 주석을 허용하는 x, 개행문자도 포함해서 찾는 s 등 다양한 Flag들이 있습니다.



---

## 정규표현식 실제 적용

사용자로부터 값을 입력 받는 부분에서 유효성 체크를 하기 위해  <br /> 정규표현식을 간단하게 적용한 경우가 있었습니다.  <br /> 먼저 입력 받은 값은 반드시 한글이 포함되지 않도록 유효성 체크를 하는 부분이 있었습니다.  <br /> vv사용자가 입력한 데이터 중에서 유효하지 않는 데이터를 정규표현식을 이용하여 검색한 뒤  <br /> **Return**하는 방법을 사용하였습니다.

```javascript
//사용자가 입력한 ID가 한글이 포함되어 있는지 Check 합니다.
function idCheck () {  
    // 입력한 ID를 Check하기 위해 가져옵니다.
    var titleCheck = $("titleId").val;
    // 정규표현식으로 한글만 선택하도록 만듭니다.
    var languageCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    // 입력한 ID와 정규표현식을 비교하여 한글 여부를 판단합니다.
    // test외에도 search ,exec , match등을 사용할 수 있습니다.
    if (languageCheck.test(titleCheck)) {
        alert("ID에 한글이 포함되어 있습니다.");
        return;
    }

    ...    

}
```



---

다음으로는 8자리 이하 정수로 이루어진 x, y 좌표를 사용자로부터 입력 받는 경우가 있었습니다.  <br /> 사용자가 조건에 충족하지 않은 값을 입력할 경우 DB에 적재 할 때나 좌표를 활용할 때 <br /> 문제가 발생할 수 있기 때문에 유효성 체크가 필요했습니다. <br /> 사용자가 값을 입력할 때마다 유효한 값인지 체크를 하고, <br /> 잘못된 값을 입력하면 그 값은 Null로 치환을 하는 방법을 사용했습니다.  <br /> 사용자 입장에서는 유효하지 않은 값을 입력하면 값을 입력하는 순간 <br />  아무런 동작을 하지 않은 것처럼 보입니다.

```javascript
// 8자리 이하인 숫자인지 Check 하는 Function
// 사용자가 Key를 입력할 때마다 Function이 호출되도록 구현하였습니다.
function checkNumber (data) {  
    // 사용자가 입력한 값을 Check를 위해 변수에 넣습니다.
    var checkData = data.value;
    // 입력한 값이 8자리가 넘어가는지 Check를 합니다.
    if ( checkData.length > 8 ) {
        // 8자리가 넘어가면 8자리까지만 표현하고 나머지는 제외합니다.
        data.value = checkData.substring(0,8);
    } else {
        // 8자리 이하일 경우
        // Number형이 아닌값이 입력되면 입력값을 null값으로 대체합니다.
        data.value = checkData.replace(/[^0-9]/g, '');
    }
}
```



---

정규표현식으로 조건을 구현하니 매우 간단하게 해결하였습니다.  <br /> 이 밖에도 Email Check, File 확장자 Check, 주민등록번호 Check,  <br /> 문자열 공백제거, 문자열 첫 글자 대문자로 치환 등등 정규표현식을 이용하여  <br /> 다양한 형태의 유효성검사를 구현할 수 있습니다.  <br /> 정규표현식을 구현하면서 유용한 Utility들이 있습니다.  <br /> 물론 이러한 Utility들은 Web에서 다양하게 찾아 볼 수 있지만 <br />  프로젝트를 진행하면서 유용하게 사용했던 Utility두가지에 대해서 간단하게 소개하도록 하겠습니다.  <br /> 먼저 사용자가 정규표현식을 작셩하고 직접 원하는 문자열을 Test 할 수도 있고, <br />  quality 높은 표현식을 구현하는데 도움을 주는 Utility입니다. <br />  정규표현식에 대해서 지식이 부족한 사용자도 우측의 정규식 표현 Sample과  <br /> 그에 대한 설명이 자세하게 나와있어서 쉽게 구현할 수 있습니다.  <br /> 프로그램을 다운받지 않고 Web에서 직접 실행하므로  <br /> 별다른 설치 없이도 즉시 사용할 수 있는 편리성이 있습니다.  <br /> 하지만 Web에서 실행하므로 Off-Line에서는 지원이 안되며,  <br /> 프로그램 내부에서 전체적으로 Font Size가 작다는 단점이 있습니다.

<http://gskinner.com/RegExr/>

![img](http://www.nextree.co.kr/content/images/2016/09/jhkim-140117-RegularExpression-17.png)

두번째 Utility는 표현식을 쉽게 이해할 수 있도록 도식화 하는 Utility입니다.  <br /> 앞에서 정규표현식 표현방법을 소개 할 때 쉽게 이해할 수 있도록 도식으로 처리한 부분도 이 Utility를 이용하여 직접 구현하였습니다.  <br /> 이 Utility는 표현식을 구현하기 보다는 복잡한 표현식을 해석하고 이해하는 목적이 가장 알맞다고 생각합니다. <br />  프로젝트를 진행하면서 직접 구현한 표현식이 도식으로 목적에 맞게 구현 되는지 Test 할 수 있습니다.  <br /> 정규표현식에 대해 어느 정도 지식을 갖추고 있는 사용자들에게 적합하다고 생각합니다.  <br /> 이 Utility도 앞선 Utility와 마찬가지로 Web에서 별다른 설치 없이 즉시 사용 가능합니다.

<http://www.regexper.com/>

![img](http://www.nextree.co.kr/content/images/2016/09/jhkim-140117-RegularExpression-181.png)

## 글을 마치며...

정규표현식은 자주 쓰지 않으면 금방 잊게 되는 수학공식과 같은 존재라고 생각합니다.  <br /> 정규표현식에 대해서는 오래전부터 접해보긴 했지만,  <br /> 매번 수박 겉 핥기 식의 학습으로 인해 정규표현식을 접할 때마다 새로운 느낌을 받았습니다.  <br /> 이번에 정규표현식에 대해 글을 쓰는 목적 중에 하나는 회사 블로그에 글을 올리면서 <br />  이러한 얕은 지식을 정리하고 내 것으로 만드는 계기가 되도록 하는 마음으로 선택하였습니다.  <br /> 이번 프로젝트에는 정규표현식을 다양하게 사용하지 못해서 한정된 부분만 구현하였지만,  <br /> 기본 표현법만 제대로 익히면 JavaScript 이외에 다양한 정규표현식에서도 쉽게 응용할 수 있다고 생각합니다.

## 참조 Site

정규표현식 - wiki백과 [http://ko.wikipedia.org/wiki/정규표현식](http://ko.wikipedia.org/wiki/%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D) 
정규표현식의 기본 문법 정리표 <http://blog.daum.net/creazier/15309380> 
정규표현식 사용하기 <http://icoon22.tistory.com/220> 
정규식이란 무엇인가 [http://twinstarbox.tistory.com/entry/Java-정규식이란-무엇인가](http://twinstarbox.tistory.com/entry/Java-%EC%A0%95%EA%B7%9C%EC%8B%9D%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80) 
자바스크립트 정규 표현식 <http://yaku.tistory.com/75> 
Perl 정규표현식, 메타데이타 <http://blog.naver.com/PostView.nhnblogId=turtle1006&logNo=60107758671>

## 정규표현식 관련 Utility Site

정규표현식 Test 및 생성 Util <http://gskinner.com/RegExr/> 
정규표현식 도식화 표현Util <http://www.regexper.com/>

** [Regular Expression](http://www.nextree.co.kr/tag/regular-expression/), [정규표현식](http://www.nextree.co.kr/tag/jeonggyupyohyeonsig/)



---

**출처:  [Nextree](http://www.nextree.co.kr/author/nextree/)**