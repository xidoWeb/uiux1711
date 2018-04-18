# javascript 기초6 - <br />정규표현식(Regular Expression) 정리1



정규표현식에서 사용하는 기호를 Meta문자라고 합니다. <br />
Meta문자는 표현식 내부에서 특정한 의미를 갖는 문자를 말하며,
공통적인 기본  Meta문자의 종류는 다음과 같습니다. <br />
 JavaScript에서 정규표현식은 객체입니다. <br />
이러한 패턴은 RegExp의 exec와 test 메소드들, 
그리고 String의 match, replace, search, split 메소들과 함께 사용됩니다. <br />
**[정규표현식 테스트 링크](http://gskinner.com/RegExr/)**



---

| 정규식표현 | 설명                                       |
| ---------- | ------------------------------------------ |
| ^x         | 문자열이 x로 시작한다                      |
| x$         | 문자열이 x로 끝난다                        |
| .x         | 임의의 한 문자를 표현한다                  |
| x+         | x가 1번이상 반복한다                       |
| x?         | x가 존재하거나 존재하지 않는다             |
| x*         | x가 0번이상 반복한다                       |
| x\|y       | x또는 y를 찾는다                           |
| (x)        | ()안의 내용을 캡쳐하며, 그룹화 한다        |
| (x)(y)     | -                                          |
| (x)(?:y)   | -                                          |
| x{n}       | x를 n번 반복한 문자를 찾는다               |
| x{n,}      | x를 n번 이상 반복한 문자를 찾는다          |
| x{n,m}     | x를 n번 이상 m번 이하 반복한 문자를 찾는다 |

---

| 정규식표현 | 설명                                          |
| ---------- | --------------------------------------------- |
| [xy]       | x,y중 하나를 찾는다                           |
| [^xy]      | x,y를 제외하고 문자 하나를 찾는다             |
| [x-z]      | x~z 사이의 문자중 하나를 찾는다               |
| \^         | 특수문자를 문자로 인식함                      |
| \b         | 문자와 공색사이의 문자를 찾는다               |
| \B         | 문자와 공백사이가 아닌 값을 찾는다            |
| \d         | 숫자를 찾는다                                 |
| \D         | 숫자가 아닌 값을 찾는다                       |
| \s         | 공백문자를 찾는다                             |
| \S         | 공백이 아닌 문자를 찾는다                     |
| \t         | Tab 문자를 찾는다                             |
| \v         | Vertical Tab 문자를 찾는다                    |
| \w         | 알파벳 + 숫자 + _ 를 찾는다                   |
| \W         | 알파벳 + 숫자 + _을 제외한 모든 문자를 찾는다 |

---

## 자바스크립트에서 정규식 사용하기

 **아래 내용과 예제는 다음 사이트를 참고하였습니다** <br />참고 사이트:**<http://www.nextree.co.kr/p4327/>



---

다음과 같은 코드가 있을 경우

```javascript
var patt = /w3schools/i;
```

- **/w3schools/i **는 정규 표현식 입니다
- **w3schools** 는 패턴 입니다 (검색시 사용됩니다)
- **i **는 수정자 입니다




---

### 수정자 (modifiers)

- **i** : case-insentive 매치 (대소문자를 구별하지 않습니다)
- **g** : 글로벌 매치 (첫번째 조건을 찾은 뒤 모든 조건을 다 검색 합니다)****
- **m** : 멀티라인 매치를 실시 합니다




---

### RegExp 오브젝트 메소드 

- **compile()** : 버전 1.5에서 가치가 하락. 정규 표현식을 컴파일함
- **exec()** : 문자열로 테스트 후 첫 번째 매치값을 반환
- **test()** : 문자열 테스트 후 참/거짓으로 반환
- **toString()** : 문자값을 정규 표현식으로 반환




---

### DOT(.)

- 정규표현식에서 점(.)은 모든 문자열을 나타냅니다 **(단, 줄바꿈 \n은 제외)**
- a + 모든문자 +  b 는 다음과 같이 나타낼 수 있습니다` (a.b)` 이렇게 사용시 세 글자로 이루어져 있으며 a와 b 사이에는 모든 문자가 포함된 것을 매치 시킵니다.

---

### 반복(*) & 반복(+) & 반복고정({m,n},?)

- `ca*r`에서 반복의 의미는 **a 가 0번 부터 무한대 까지 반복하는 모든 문자열**을 찾아줍니다. 

   `ex) cr, car, caar, caaar ...`

- `+` 는 최소 **1개 이상부터 반복**하는 것을 의미합니다 

    `ex) car, caar, caaar ...`

- `{m, n}`일 경우 **반복횟수가 m 부터 n인 것을 매치** 시킵니다.  <br /> 둘 중 하나의 값만 사용해도 됩니다 

    `ex) ca{2}r` 을 사용시 **caar을 찾아준다** (a가 두번 반복 되기 때문에)

- `ca{2,6}r`일 경우 **a가 2~6번 반복되는 모든 문자열**을 찾아준다

- `?`는 {0,1}과 같아서 **문자열이 있거나 없는 것**을 찾아준다




---

### 정규식에서 사용되는 메소드 ++

1. **exec()** : 일치하는 문자열을 찾는 RegExp 메소드입니다. <br />  정보를 가지고 있는 배열을 반환합니다.  <br />  console.log(myArray)를 사용하면 배열인 ["dbbd", "bb"]를 반환 합니다.

```javascript
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
```

2. **replace()** : 일치하는 문자열을 찾는 String 메소드입니다.  <br /> 일치하는 문자열을 replacement 로 대체합니다. <br />  여기서, $1, $2는 첫번째와 두번째 소괄호의 문자열을 대신하는 특수기호와 같습니다. 

> str 배열에 담겨있는 John Smith인 문자열에서  <br /> re에 정의해둔 정규식패턴을 사용해서 앞 뒤를 바꿔주는 것입니다.  <br /> console.log 사용시 결과값은 "Smith John" 이 출력됩니다.

```javascript
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

3. **match()** : 일치하는 문자열을 찾는 String 메소드입니다. <br />  정보를 가지고 있는 배열을 반환하거나 일치하지 않는 부분을 null로 반환합니다. <br />  i 플래그를 사용해서 대/소문자 구분없이 매치 가능합니다. 

```javascript
var str = 'For more information, see Chapter 3.4.5.1';
var re = /(chapter \d+(\.\d)*)/i;
var found = str.match(re);
console.log(found);
```

4. **test()** : 일치하는 문자열을 검사하는 RegExp 메소드입니다.  <br /> true나 false를 반환합니다.

```javascript
function testinput(re, str){
  var midstring;
  if (re.test(str)) {
    midstring = ' contains ';
  } else {
    midstring = ' does not contain ';
  }
  console.log(str + midstring + re.source);
}
```



---

**정규 표현식 사용 방법 두 가지**

- **// RegExp 객체를 이용한 방법**: var objectInit = new RegExp('정규표현식', ['Flag']);
- **// 객체초기화 방법**: var regExp = / 정규표현식/[Flag];



**정규식 실전 사용방법**

> 아래 예시는 사용자 아이디에 한글이 포함되어 있는지를 확인하는 정규식표현 방법입니다.  <br /> userId에 텍스트를 입력한 다음 submit 버튼을 누르면 변수로 담아놓은 정규식 패턴과 비교해서  <br /> 한글이 포함되어있을 경우 "ID에 한글이 포함되어 있습니다."  <br /> 없을경우, ID가 등록 되었습니다" 를 출력해줍니다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>정규식연습</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
</head>
<body>
<input type="text" class="userId">
<button onclick="idCheck()">submit</button>
<script type="text/javascript">
    function idCheck () {
        var titleCheck = $(".userId").val();
        var languageCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
 
        if (languageCheck.test(titleCheck)) {
                 alert("ID에 한글이 포함되어 있습니다.");
            } else {
                 alert("ID가 등록 되었습니다.");
        }
    }
</script>
</body>
</html>


출처: http://droptable.tistory.com/65 [DropTable]
```

 

---

### 자주 사용하는 정규식 표현 알아보기 

1. 사용자 이름 (Matching a Uername) : **/^[a-z0-9_-]{3,16}&/**

>  ^는 시작을 알려 주며 소문자 a-z, 또는 숫자 0-9의 값, 언더스코어, 하이픈이 올 수 있습니다. <br />  {3,16}은 최소길이 3부터 16까지를 말합니다. 문장의 끝을 알려주는 $이 포함되어 있습니다.

2. 사용자 비밀번호 (Matching a Password) : **/[a-z0-9_-]{6,18}/**

>  사용자 이름과 차이점은 길이가 다르다는 것입니다.

3. 이메일 주소 (Matching an Email) : **/([a-z0-9_\ .-]+)@([/da-z\ .-]+)\ .([a-z\ .]{2,6})/**

>  `.` 을 사용하면 모든 문자열과 띄어쓰기를 포함합니다.  <br /> 그렇기 때문에 백스페이스\를 사용해서 특수문자로 만들어줘야 합니다.

4. 문서에서 필요없는 줄간격을 없에는 정규식 표현 :  **^\s**


---

**내용참조** http://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149

****

****

**[출처]** [자바스크립트 정규식표현 정리](http://blog.naver.com/love_junim/220499989314)|**작성자** [F2F](http://blog.naver.com/love_junim)

출처: http://droptable.tistory.com/65
