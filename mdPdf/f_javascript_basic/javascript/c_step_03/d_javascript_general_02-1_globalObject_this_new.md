# javascript 일반_2-1 GlobalObject, this, new

지난시간에는 조건문 그리고 반복문에 대한 내용들을 익히고 정리하였습니다.
이번시간엔 자바스크립트를 활용할때에 필요한 **전역객체(global Object)**, **생성자(new)**, **this**에 대해 알아보겠습니다.

---

[TOC]

---

## 전역객체(Global Object)

**자바스크립트는 최상위에 1개의 전역객체(Global Object)를 가진다.**

자바스크립트는 소스코드를 실행하기 전,
최상위에 위치한 **전역객체(Global Object)**를 만듭니다. 
자바스크립트의 모든 객체와 값들은 이 전역객체의 아래에 자손(descendants)으로 위치하게 됩니다. 

```javascript
var obj = {
  myFunction : function(){
    			return 'global Object test';
  				},
  funTest2 :'window객체 내부에 들어있는 obj객체를 확인'
};
```

위 내용은 간단한 예제를 확인하기 위해 변수 `obj`를 생성하고, 이를 객체로 처리한 객체의 내용입니다. 
`obj`의 내부에는 두개의 속성이 존재하는데 
`myFunction`는 함수형태를 가진 값을 가지고 있으며, 이를 **메소드(method)** 라고 합니다.
또한, `funTest2`의 경우는 `value`형태의 값을 가지고 있기 때문에 이를 **프로퍼티(property)**라고 합니다.

위 내용을 호출하려면, 
기본적으로 `obj.myFunction()`, `obj.funTest2`를 작성하여 호출하는 방법이 있습니다.

 이때 둘은 앞에 `window`를 붙여, `window.obj.myFunction()`, `window.obj.funTest2`를 사용할 수 있습니다.
이는 **window**라고하는 객체의 자손 형태로 위치한다는 의미로 이해할 수 있습니다.

전역객체는 전체 코드에서 단 1개만 존재(웹브라우저에서는 **window**)할 수 있으며, 
**new 연산자를 이용하는 등의 방법으로 새롭게 만들 수 없습니다.**

```javascript
// 현재 시간을 확인하는 메소드
Date();
window.Date();

// 0~1까지의 숫자를 무작위로 뽑아내는 메소드
Math.random();
window.Math.random();

// 브라우저의 가로/세로값을 혹인하는 메소드
innerWidth();
window.innerWidth();
innerHeight();
window.innerHeight();
```

위 내용은 모두 전역객체를 사용하여 처리할 수 있는 코드드를 간단하게 테스트해 볼 수 있는 내용입니다.

이 전역객체의 이름은 자바스크립트를 사용하는 환경(호스트환경)에 따라 얼마든지 달라질 수 있습니다. 
이를테면 `웹 브라우저`에서 사용되는 자바스크립트의 전역객체는 우리가 잘 아는 **window**라는 이름의 객체입니다. 
한편 자바스크립트를 사용하는 서버인 `Node.js`에서는 **global**이라는 이름의 전역객체가 있습니다.

[API](https://opentutorials.org/course/50/44)를 확인해보고 어떠한 전역객체에 해당하는 것들이 있는지 확인해 보세요.

---

## this

this는 함수 내에서 함수 호출 맥락(context)를 의미합니다.
여기서 맥락이란 상황에 따라 주어지는 값이 달라지게 만듭니다.
즉, 함수를 어떻게 호출하느냐에 따라서 this가 가리키는 대상이 달라진다는 뜻으로 이해할 수 있습니다.
함수와 객체의 관계가 느슨한 자바스크립트에서 this는 이 둘을 연결시켜주는 실질적인 연결점의 역할을 한다.

```javascript
function func(){
	return this;
}
console.log( func() );
```

위 내용은 `this`에 대한 의미를 구하기위하여 `return`처리하여 결과를 유추한 내용입니다.
결과는 `Window {stop: function, open: function, alert: function, confirm: function, prompt: function…}`입니다.
여기서 객체형태의 `window`라는 이름을 얻을 수 있습니다.

다시 한번 확인해 보겠습니다.

```javascript
function func(){
    if(window === this){
        console.log("window === this");
    }
}
func(); 
```

위 내용을 확인해 보면
객체의 소속인 메소드의 `this`는 그 객체를 가르킨다는 것을 알 수 있습니다.

```javascript
var obj = {
  func : function(){
			return this;
        }
}
console.log( obj() );
```

위 내용은 객체 `obj`의 메소드 `func`의  `this`에 대한 의미를 구하기위하여 
`return`처리하여 결과를 유추한 내용입니다.
결과는 `Object {func: function}`를 얻게됩니다.
여기서 `this`는  **object** 즉, `obj`라는 것을 유추할 수있습니다.

```javascript
var o = {
    func : function(){
        if(o === this){
            console.log("o === this");
        }
    }
}
o.func();   
```

위 내용은 객체인 `o`에 메소드 `func`를 담고 해당하는 메소드의 `this`가 무엇인지 판단하기 위해 
결과를 확인해보는 내용입니다.

```javascript
var funcThis = null; 
 
function Func(){
   return funcThis = this;
}
var o1 = Func();
var o2 = new Func();

console.log( Func() );
console.log(o1);
console.log(o2);
```

위 내용은 **생성자**에 대한 내용의 `this`입니다.
다음 내용에서 배울 생성자를 이해하고 사용하면 좀더 쉽게 다가갈 수 있습니다만,
간단하게 설명하자면 **함수를 객체화 처리**하여 만든 구조라고 설명하겠습니다. 

각 호출의 결과물은 `window`, `window`, `Func`입니다.

```javascript
var funcThis = null; 
 
function Func(){
    funcThis = this;
}
var o1 = Func();
if(funcThis === window){
    console.log('window');
}
 
var o2 = new Func();
if(funcThis === o2){
    console.log('o2');
}
```

위 내용은 생성자에 대한 내용의 결과물이 각 내용에서 어떻게 적용되고 있는지를 판단하게 만드는 형태로 확인할 수 있습니다.

---

## 생성자(new)

객체란 서로 연관된 변수와 함수를 그룹핑한 그릇이라고 할 수 있습니다.
객체 내의 변수를 프로퍼티(property) 함수를 메소드(method)라고 부릅니다. 

여기에 생성자는 특정 유형의 함수를 객체형태로 변환처리 됩니다. 
**new** 키워드를 사용하여 생성자를 호출합니다.
다음은 기본 제공 JavaScript 개체와 사용자 지정 개체가 포함된 생성자의 몇 가지 예제입니다.

```javascript
function Circle (xPoint, yPoint, radius) {
    this.x = xPoint;  // The x component of the center of the circle.
    this.y = yPoint;  // The y component of the center of the circle.
    this.r = radius;  // The radius of the circle.
}
```

```javascript
var aCircle = new Circle(5, 11, 99);
var bCircle = new Circle(15, 10, 70);
var cCircle = new Circle(20, 5, 69);
```

---

```javascript
var person = {}
  person.name = 'xido';
  person.introduce = function(){
      return 'My name is '+this.name;
}
document.write(person.introduce());
```



```javascript
var person = {
    'name' : 'xido',
    'introduce' : function(){
        return 'My name is '+this.name;
    }
}
document.write(person.introduce());
```

```javascript
function Person(){}
var p = new Person();
p.name = 'xido';
p.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p.introduce());
```

```javascript
function Person(){}
var p1 = new Person();
p1.name = 'xido';
p1.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p1.introduce()+"<br />");
 
var p2 = new Person();
p2.name = 'bin';
p2.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p2.introduce());
```

```javascript
function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name; 
    }   
}
var p1 = new Person('xido');
document.write(p1.introduce()+"<br />");
 
var p2 = new Person('bin');
document.write(p2.introduce());
```

---

위 생성자의 형태를 이용하여 만든 추가 예제 문입니다. 

```javascript
// 함수를 생성(기본 틀)
function Student(name, kor, math, eng, sci) {
  this.name = name; 
  this.kor = kor; 
  this.math = math; 
  this.eng = eng; 
  this.sci = sci; 
  this.getSum = function() { 
    return this.kor + this.math + this.eng + this.sci; 
  }; 
  this.getAverage = function() { 
    return this.getSum() / 4; }; 
  this.toString = function() { 
    return 
      this.name + ' ---------- ' + 
      this.getSum() + ' ---------- ' + 
      this.getAverage(); 
  }; 
} 
var students = []; 
```

```javascript
// 생성된 함수를 이용하여 처리
students.push(new Student('student1', 99, 99, 99, 99)); 
students.push(new Student('student2', 88, 88, 88, 88)); 
students.push(new Student('student3', 77, 77, 77, 77)); 
students.push(new Student('student4', 66, 66, 66, 66)); 
students.push(new Student('student5', 55, 55, 55, 55)); 
students.push(new Student('student6', 44, 44, 44, 44)); 

var output = 'name ---------- sum ---------- avg\n'; 

for (var i in students) { 
  output += students[i].toString() + '\n'; 
} 
alert(output);
```

