# javascript 일반_1-2 함수3

지난시간에 이어 함수에대한 종류를 이어나가도록 하겠습니다.
내용상 일부는 차후 별도로 추가설명된 부분들이 존재합니다.
이점 참고하세요.

---

[TOC]

---

## 함수의 종류

- [익명함수](#noneName)
- [중첩함수](#innerFn)
- [콜백함수(call back)](#callBack)
- [**즉시 실행 함수** (**IIFE**: Immediately Invoked Function Expressions)](#iife)
- 내장함수
- [재귀함수](#recursive)
- [클로저](#closure)

---

### 내장함수



---

### 재귀 함수(Recursive Function)<div id="recursive"></div>

함수는 함수 안에서 자기 자신을 다시 호출하는 것을 재귀함수라고 합니다.

```javascript
function fakeFactorial(n) {
    var result = 1;
    for(var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(fakeFactorial(3)); // 3 * 2 * 1 = 6
console.log(fakeFactorial(4)); // 4 * 3 * 2 * 1 = 24

// 재귀를 이용한 factorial(계승) 함수

function factorial(n) {
    if(n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n -1); // 자기 자신을 다시 호출
    // 파라미터가 3이라면 3 * factorial(2) * factorial(1)
}

console.log(factorial(3);

// 삼항 연산자를 이용한 계승 재귀함수
function fact(n) {
    return (n > 1) ? n * fact(n -1) : 1;
}
console.log(fact(5)); // 120
```

위의 두번째 함수와 같이 자기 자신을 다시 호출하여 사용하는 것을 재귀 함수라고 합니다.

```javascript
var sports = {
    soccer : {member: 11, time: 90},
    basketball : {member: 5, time: 48}
};

function showValues(sports) {
    var type, obj, name;
    for(type in sports) {
        obj = sports[type];
        for (name in obj) {
            console.log(name + " : " + obj[name]);
        }
    }
}

showValues(sports);
```

위의 예제는 객체의 key : value를 출력하는 예제입니다.<br />
sports란 객체에는 또 다른 객체를 포함하고 있는 계층적인 객체구조를 이루고 있습니다.

하지만 여기서 soccer 객체의 soccer.meber의 값이 11이 아닌 {step : {value: 11}}의 형태인 계층적 객체를 또 포함하고 있다면 이 객체의 프로퍼티를 열거하기 위해 또 한번의 for-in문을 작성해야 합니다.

그런데 이런 계층적인 객체에 맞추어 코드를 유동적으로 작성할 수는 없다. 이럴 경우에 재귀함수를 사용하여 해결할 수가 있다.

> 실행 결과 

```console
member : 11
time : 90
member : 5
time: 48
```



---

### 클로저 <div id="closure"></div>

함수 리터럴을 이용해 정의된 함수를 익명함수 라고 합니다.
함수의 이름이 없기 때문에 익명함수라고 불리우고 있으며, 
주로 변수에 할당되거나 함수 인자의 값 또는 반환값으로 사용되어 집니다.

함수표현식에 사용하는 함수가 대부분이 익명함수입니다.

```javascript
var NoNameFn = function(){
  var fnName = '함수의 이름이 정의되지 않았으므로, 호출된 함수는 익명함수 입니다.';
  return fnName;
};

console.log( NoNameFn() );
```

---

출처: 위의 예제는 객체의 key : value를 출력하는 예제이다. sports란 객체에는 또 다른 객체를 포함하고 있는 계층적인 객체구조를 이루고 있다. 

하지만 여기서 soccer 객체의 soccer.meber의 값이 11이 아닌 {step : {value: 11}}의 형태인 계층적 객체를 또 포함하고 있다면 이 객체의 프로퍼티를 열거하기 위해 또 한번의 for-in문을 작성해야 한다. 

그런데 이런 계층적인 객체에 맞추어 코드를 유동적으로 작성할 수는 없다. 이럴 경우에 재귀함수를 사용하여 해결할 수가 있다.

----



**출처:** http://webclub.tistory.com/72  [Web Club]