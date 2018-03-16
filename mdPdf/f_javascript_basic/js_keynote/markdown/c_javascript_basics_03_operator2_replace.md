# javascript 기초_3

이전시간에는 변수의 값을 이용한 간단하고 다양한 내용을 익혀보았습니다.
이번시간에는 좀더 깊이있고 복잡하지만 꼭 알아야하는 기본 연산자에 대한 부분을 알아 보도록 하겠습니다.

---

[TOC]

---



---
### 기타연산자

| 연산자        | 개요                      |
| ---------- | ----------------------- |
| ,(콤마)      | 좌우의 식을 계속해서 실행          |
| delete     | 객체의 프로퍼티나 배열의 요소를 삭제    |
| instanceof | 객체가 지정된 클래스의 인스턴스인지를 판정 |
| new        | 새로운 인스턴스를 생성            |
| typeof     | 오퍼랜드의 데이터형을 취득          |
| void       | 미정의 값을 되돌림              |

---

### 연산자 우선순위 및 결합 순서

어떤 식 안에 복수의 연산자가 포함되어 있을 경우에는 "어떠한 순서로 처리할지?"를 판단할 필요가 있습니다.
이것을 결정하는 것이 연산자의 **우선 순위**와 **결합 순서**입니다.
특히, 복잡한 식을 기술하는 경우에는 이것을 잘 이해해 두지 않으면, 
생각지도 못한 곳에서 의도하지 않은 결과가 발생할 수도 있으니 주의가 필요합니다.

#### 우선순위

#### 결합순서

> 우선순위가 동일한 경우 
> 어떤 방향으로 연산을 행할 것인지를 정한 룰

------

### 콤마 연산자

[콤마 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Comma_Operator) (`,`)는 두 피연산자를 비교하고, 마지막 피연산자의 값을 반환합니다. 이 연산자는 주로 `for` 반복문 안에서 각각의 시간에 복수의 변수들을 갱신하기 위하여 사용합니다.

예를 들어, a는 각 변에 10개의 원소가 있는 2차원 배열일때, 다음의 코드는 콤마 연산자를 두 변수를 한번에 증가 시키기 위하여 사용하였습니다. 이 코드는 배열의 대각선에 위치한 원소를 출력합니다:

```
for (var i = 0, j = 9; i <= j; i++, j--)
  console.log("a[" + i + "][" + j + "]= " + a[i][j]);
```

### 단항 연산자

단항 연산자는 오직 하나의 피연산자를 가지고 연산을합니다.

#### `delete`

`delete`연산자는 객체, 객체의 속성 또는 배열의 특정한 위치에 있는 객체를 삭제합니다. 문법은 다음과 같습니다:

```
delete objectName;
delete objectName.property;
delete objectName[index];
delete property; // legal only within a with statement
```

`objectName`은 객체의 이름이고, `property`는 객체에 존재하는 속성이고,`index`는 배열의 위치를 나타내는 정수입니다.

네번째 형태의 경우,객체의 속성을 삭제하기 위하여 `with` 구문이 있어야만 동작합니다.

 `delete`연산자를  `var구문을 사용하지 않고 암암리에 만들어진 변수들을 삭제할때 사용할 수 있습니다`.

`만약 delete`연산자의 동작이 성공했다면, delete 연산자는 속성이나, 원소를 `undefined` 로 설정합니다. `delete` 연산자는 연산이 수행 가능할때 true값을 반환합니다; 수행이 불가능 할 경우 `false` 값을 반환합니다.

```
x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4;    // create property h
delete x;       // returns true (can delete if declared implicitly)
delete y;       // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete predefined properties)
delete myobj.h; // returns true (can delete user-defined properties)
delete myobj;   // returns true (can delete if declared implicitly)
```

##### 배열의 원소를 삭제하기

배열의 원소를 삭제할때, 배열의 길이에는 영향을 주지 못합니다. 예를 들어, 만약  `a[3]`, `a[4]를 삭제 했다면` `a[4]` 와 `a[3]는 undefined(정의되지 않음)상태로 되어 있습니다`.

`delete` 연산자가 배열의 한 원소를 삭제하였을때, 그 원소는 배열에 존재하지 않습니다. 다음의 예제에서, `trees[3]`는  `delete 연산자에 의해 제거되었습니다`.그러나, `trees[3]` 는 아직도 다룰수 있고 `undefined`(정의 되지 않음) 을 반환합니다.

```
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
if (3 in trees) {
  // this does not get executed
}
```

만약 배열의 원소가 존재하지만 undefined(정의 되지 않음)값을 가지고 싶으면,` delete 연산자 대신 undefined` 키워드를  사용하세요. 다음의 예제에서, `trees[3]` 은  `undefined값을 대입받습니다`,그러나 배열의 원소는 아직도 존재합니다:

```
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
if (3 in trees) {
  // this gets executed
}
```

#### `typeof`

[`typeof` 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof)는 다음과 같은 방법으로 사용됩니다:

```
typeof operand
typeof (operand)

```

`typeof` 연산자 피연산자의 타입을 나타내는 문자열을 반환합니다. `operand` 는 어떤 타입인지 반환될 문자열, 변수, 키워드,또는  객체입니다 . 괄호 표현은 선택사항입니다.

다음의 변수를 정의했다고 가정하세요:

```
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var today = new Date();
```

`typeof` 연산자는 이 변수들에 대하여 다음과 같은 값을 반환합니다:

```
typeof myFun;     // returns "function"
typeof shape;     // returns "string"
typeof size;      // returns "number"
typeof today;     // returns "object"
typeof dontExist; // returns "undefined"
```

`typeof` 연산자는 키워드`true` 와 `null`에 대하여 다음과 같은 결과를 반환합니다:

```
typeof true; // returns "boolean"
typeof null; // returns "object"
```

typeof 연산자는 숫자와 문자열에 대하여 다음과 같은 결과를 반환합니다:

```
typeof 62;            // returns "number"
typeof 'Hello world'; // returns "string"
```

`typeof` 연산자는 객체의 속성에 대하여 속성이 갖고있는 타입의 값을 반환합니다.

```
typeof document.lastModified; // returns "string"
typeof window.length;         // returns "number"
typeof Math.LN2;              // returns "number"
```

`typeof` 연산자는 메소드와  함수들에 대하여 다음과 같은 결과를 반환합니다:

```
typeof blur;        // returns "function"
typeof eval;        // returns "function"
typeof parseInt;    // returns "function"
typeof shape.split; // returns "function"
```

`typeof 연산자는` 미리 정의된 객체에 대하여 다음과 같은 결과를 반환합니다:

```
typeof Date;     // returns "function"
typeof Function; // returns "function"
typeof Math;     // returns "object"
typeof Option;   // returns "function"
typeof String;   // returns "function"
```

#### `void`

[`void` 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/void) 는 다음과 같은 방법들로 사용됩니다:

```
void (expression)
void expression

```

 `void` 연산자는 값을 반환하지 않고 평가되도록 명시합니다. `expression`는 자바스크립트의 평가될 표현 입니다. 괄호 로 둘러싸는것은 선택사항이지만, 괄호로 둘러싸는게 좋은 사용방법입니다.

`void` 연산자를 표현을 하이퍼링크 에서 명시할때 사용할 수 있습니다 . 구문은 실행이 되나, 현재의 문서에는 로드되지 않습니다.

다음의 코드는 사용자가 클릭을 하였을때 아무 일도 안하는 하이퍼링크를 생성합니다. 사용자가 클릭을 했을때, `void(0)`는` 자바스크립트에서 아무런 영향을 줄 수 없는 undefined(정의 되지않음)`으로 평가됩니다.

```
<a href="javascript:void(0)">Click here to do nothing</a>
```

다음의 코드는 사용자가 클릭을 하였을때, 폼을 제출하는 하이퍼링크를 생성합니다.

```
<a href="javascript:void(document.form.submit())">
Click here to submit</a>
```

### 관계 연산자

관계 연산자는 피연산자들을 비교하고 `,비교의 참 여부에 기반하여 부울 값을 반환합니다`.

#### `in`

[`in` 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/in)는 객체에 특정한 속성이 있는경우 true를 반환합니다. 구문은 다음과 같습니다:

```
propNameOrNumber in objectName
```

`propNameOrNumber`는 속성의 이름을 나타내는 문자열 또는 배열의 인덱스를 나타내는 숫자이고, `objectName은 객체의 이름입니다`.

다음의 예제는 `in` 연산자의 사용 예를 보여줍니다.

```
// Arrays
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
"bay" in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
"length" in trees; // returns true (length is an Array property)

// built-in objects
"PI" in Math;          // returns true
var myString = new String("coral");
"length" in myString;  // returns true

// Custom objects
var mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar;  // returns true
"model" in mycar; // returns true
```

#### `instanceof`

[`instanceof` 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/instanceof)는 명시된 객체가 명시된 객체형인 경우 true를 반환합니다. 구문은 다음과 같습니다:

```
objectName instanceof objectType

```

`objectName은 objectType 과 비교할 객체의 이름이고`, `objectType` 은 [`Date`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date) 또는 [`Array`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)과 같은 객체형 입니다.

`instanceof` 연산자를 동작시간에 객체의 형태를 확인할 필요가 있을때 사용하세요. 예를 들어, 예외가 발생하였을때, 던저진 예외의 형태에 따라 예외를 처리하는 코드로 나뉘게 할 수 있습니다.

예를 들어, 다음의 코드는`instanceof` 연산자를`theDay 객체가`  `Date` 형의 객체인지  알아내는 코드입니다.  `theDay`객체는 `Date` 형의 객체이기 때문에, `if 구문 안의 명령문은 시행이 됩니다`.

```
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
```

### 연산자 우선순위

연산자의 우선순위는 구문을 수행할 때 수행될 순서를 결정합니다. 괄호를 통하여 우선순위를 재정의 할 수 있습니다.

다음의 표는 우선순위가 높은 순서부터 낮은 순서까지, 연산자의 우선순위에 대하여 설명하고 있습니다.

| Operator type    | Individual operators                     |
| ---------------- | ---------------------------------------- |
| 맴버 연산자           | `. []`                                   |
| 객체 호출/생성 연산자     | `() new`                                 |
| 부정/증가 연산자        | `! ~ - + ++ -- typeof void delete`       |
| 곱셈/나눗셈 연산자       | `* / %`                                  |
| 덧셈/뺄셈 연산자        | `+ -`                                    |
| 비트단위 시프트 연산자     | `<< >> >>>`                              |
| 관계 연산자           | `< <= > >= in instanceof`                |
| 같음 비교 연산자        | `== != === !==`                          |
| 비트 단위 논리곱 연산자    | `&`                                      |
| 비트단위 배타적 논리합 연산자 | `^`                                      |
| 비트단위 논리합 연산자     | `|`                                      |
| 논리 곱 연산자         | `&&`                                     |
| 논리 합 연산자         | `||`                                     |
| 조건 연산자           | `?:`                                     |
| 대입 연산자           | `= += -= *= /= %= <<= >>= >>>= &= ^= |=` |
| 콤마 연산자           | `,`                                      |

각 각의 연산자에 대한 추가적인 상세사항에 대해 연결된, 더 자세한 표를 보고 싶으면, [JavaScript Reference](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table)에서 보실 수 있습니다.

## 표현[**EDIT](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators$edit#표현)

코드 값으로 확인된 표현은 그 어떤 타당한 단위입니다.

개념적으로, 2가지의 유형이 있습니다. 첫번째는, 변수에 값을 할당시키는 것, 두번째는 단순히 값을 갖는것이 있습니다.

x = 7이란 표현은 첫번째 유형입니다.  이 표현은 x에다가 7을 할당시키기위해 =연산자를 사용합니다. 그  표현자체 7로 계산됩니다.

3 + 4란 코드는 두번째 표현방식의 예입니다. 이 표현은 7이라는 결과로 할당하는것없이 3과 4를 더하기위해 +연산자를 사용합니다.

자바스크립트는 아래 표현범주를 따릅니다.

- 산수 : 예를 들어 3.14159를 숫자로 평가합니다. (일반적으로 [산술 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators)를 사용합니다.)
- 문자열 : 예를 들어 "Fred"나 "234"를 문자열로 평가합니다. (일반적으로 [문자열 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#String_operators)를 사용합니다.)
- 논리 : 참이나 거짓으로 평가합니다. (종종 [논리 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical_operators)를 수반합니다.)
- 일차식 : 자바스크립트안에서 기본핵심어와 일반적인 표현입니다.
- 좌변식 : 좌변값들이 배치의 목적입니다.

### 일차식

자바스크립트안에서 기본핵심어와 일반적표현입니다.

#### this

현재 객체를 참조하는 데 this 키워드를 사용합니다.  일반적으로, this는 함수에서 호출하는 객체를 참조합니다. 점(.)이나 괄호([])로 접근할 수 있습니다.

```
this["propertyName"]
this.propertyName

```

어떤 객체의 최솟값 최댓값에 대하여, value 프로퍼티가 유효범위에 속하는지를 평가하는 validate 함수를 호출했다고 가정해봅시다.

```
function validate(obj, lowval, hival){
  if ((obj.value < lowval) || (obj.value > hival))
    console.log("Invalid Value!");
}
```

다음과 같이 각 form 요소의 onChange 이벤트 처리기에서 validate 함수를 호출할 수 있습니다. this 일차식을 사용하여 form 요소(element)를 전달할 수 있습니다:

```
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size=3 onChange="validate(this, 18, 99);">
```

#### 그룹연산자

그룹연산자 ()는 표현식 평가의 우선순위를 조절합니다. 예를 들어, 곱셈과 나눗셈 연산을 무시하고, 우선 덧셈 뺄셈 연산을 먼저 수행할 수도 있습니다.

```
var a = 1;
var b = 2;
var c = 3;

// default precedence
a + b * c     // 7
// evaluated by default like this
a + (b * c)   // 7

// now overriding precedence 
// addition before multiplication   
(a + b) * c   // 9

// which is equivalent to
a * c + b * c // 9
```

#### Comprehensions

Comprehensions은 실험적인 자바스크립트 기능이며, 미래 ECMA스크립트 버전에 포함이 될 것입니다. 아래에는 2개의 comprehension 있습니다:

- ** [`[for (x of y) x\]`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Array_comprehensions)

  배열 comprehensions.

- ** [`(for (x of y) y)`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions)

  생성기(Generator) comprehensions.

Comprehensions는 많은 프로그래밍 언어에서 존재하고 기존의 배열을 바탕으로하여 빨리 모을 수 있게 한다.

```
[for (i of [ 1, 2, 3 ]) i*i ]; 
// [ 1, 4, 9 ]

var abc = [ "A", "B", "C" ];
[for (letters of abc) letters.toLowerCase()];
// [ "a", "b", "c" ]
```

### 좌변식

좌측값들이 좌변식의 목적입니다.

#### `new`

당신은 사용자 정의 객체 형식 또는 한 내장된 객체 형식의 인스턴스를 만드는 데는 `new 연산자를 `사용할 수 있습니다. new는 아래와 같이 사용할 수 있습니다:

```
var objectName = new objectType([param1, param2, ..., paramN]);
```

#### super

[Super 키워드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/super)는개체의 부모에 함수를 호출하는 데 사용됩니다. 예를 들어 이것은 부모생성자를 부르는  [클래스들](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)과 함께 유용합니다

```
super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);

```

#### 확산연산자

[확산연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_operator)는 다중인수(함수호출)또는 다중요소(문자배열)들이 예상되는 곳에서 확장될 수 있는 표현을 하게합니다.

**Example:** 오늘 만약 당신이 배열은 가지고있고  기존의 것과 함께 새로운 배열을 만들고싶다면, 배열 문자열 구문은 더이상 충분하지않고 너는 다시 명령 코드로 되돌아가야합니다. 푸시, 스플라이스, concat 등의 확산 구문을 결합하는 것은 더욱 간결하게 됩니다:

```
var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
```

마찬가지로, 확산연산자는 함수 호출과 일합니다:

```
function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);
```

---
