# 웹기초 이해하기 3

[TOC]

---

## Node.js?

**https://nodejs.org/ko/**

NodeJS 는 구글 크롬의 자바스크립트 엔진 (V8 Engine) 에 기반해 만들어진 서버 사이드 플랫폼

2009년에 Ryan Dahl에 의해 개발되었으며 현시점 (2017-11-07) 최신 버전은 **v8.9.1** 

> Node.js®는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다. Node.js는 이벤트 기반, 논 블로킹 I/O 모델을 사용해 가볍고 효율적입니다. Node.js의 패키지 생태계인 npm은 세계에서 가장 큰 오픈 소스 라이브러리이기도 합니다.
> (출처: <https://nodejs.org/ko/>)

![nodejs mainpage](./img/node_main.png)

---

### *입문자들의 오해*

Node는 웹서버가 **아니다.** 
Node 자체로는 아무것도 하지 않는다. 

- 아파치 웹서버처럼 HTML 파일 경로를 지정해주고 서버를 열고 그런 설정 이 없다.
- 직접 HTTP 서버를 직접 작성해야 한다.
   (일부 라이브러리의 도움을 받으면서).
- Node.js 는 그저 코드를 실행할 수 있는 하나의 방법에 불과한 **JavasScript 런타임**일 뿐


---

### Node.js의 특징

- **비동기 I/O 처리 / 이벤트 위주**
- **빠른 속도**
- **단일 쓰레드 / 뛰어난 확장성**
- **노  버퍼링**
- **MIT 라이센스**


---

####  비동기 I/O 처리 / 이벤트 위주

>  Node.js 라이브러리의 모든 API는 비동기식입니다, 멈추지 않는다는거죠 (Non-blocking). Node.js 기반 서버는 API가 실행되었을때, 데이터를 반환할때까지 기다리지 않고 다음 API 를 실행합니다. 그리고 이전에 실행했던 API가 결과값을 반환할 시, NodeJS의 이벤트 알림 메커니즘을 통해 결과값을 받아옵니다.

#### 빠른 속도

>  구글 크롬의 V8 자바스크립트 엔진을 사용하여 빠른 코드 실행을 제공합니다.

#### 단일 쓰레드 / 뛰어난 확장성

>  Node.js는 이벤트 루프와 함께 단일 쓰레드 모델을 사용합니다. 이벤트 메커니즘은 서버가 멈추지않고 반응하도록 해주어 서버의 확장성을 키워줍니다.  반면,  일반적인 웹서버는 (Apache) 요청을 처리하기 위하여 제한된 쓰레드를 생성합니다. Node.js 는 쓰레드를 한개만 사용하고  Apache 같은 웹서버보다 훨씬 많은 요청을 처리할 수 있습니다.

#### 노  버퍼링

>  Node.js 어플리케이션엔 데이터 버퍼링이 없고, 데이터를 chunk로 출력합니다.

#### MIT 라이센스

>  Node.js 는 MIT License가 적용되어있습니다.

---

##### - MIT license

여러 가지 라이선스 중에서도 MIT 허가서는 매우 제한이 느슨한 라이선스라고 할 수 있다. 

1. **이 소프트웨어를 누구라도 무상으로 제한없이 취급해도 좋다**. 
   단, 저작권 표시 및 이 허가 표시를 소프트웨어의 모든 복제물 또는 중요한 부분에 기재해야 한다.
2. 저자 또는 저작권자는 **소프트웨어에 관해서 아무런 책임을 지지 않는다**.




---

#### Node.js는 누가쓸까?

Node.js는 eBay, GoDaddy, Microsoft, Paypal, Yahoo! 등 많은곳에서 사용되고 있답니다.
다음은 Node.js 를 사용하는 프로젝트, 어플리케이션 및 회사의 리스트를 포함하고있는 GitHub 위키 링크입니다.

[Node.js 를 사용하는 프로젝트 / 어플리케이션 / 회사](https://github.com/joyent/node/wiki/projects,-applications,-and-companies-using-node)



---

#### Node.js를 어디에 쓸까?

다음과 같은 분야에 Node.js 가 사용된다면 뛰어난 효율성을 달성 할 수 있습니다.

- 입출력이 잦은 어플리케이션
- 데이터 스트리밍 어플리케이션
- 데이터를 실시간으로 다루는 어플리케이션
- JSON API 기반 어플리케이션
- 싱글페이지 어플리케이션



---

## 테스트 및 우리가 당장 사용할 것!

- node.js 버전 확인(설치가 되었다면 버전이 나타남.)

```shell
$ node --version ⏎
```

- node.js package 버전 확인(설치가 되었다면 버전이 나타남.)

```shell
$ npm --version ⏎
```

개발작업시 필요한 플랫폼의 경우는 대체로 package라고하는 기능이 별도로 첨부되어있다.
일종의 플러그인으로 이해하면 쉽다. 
nodejs의 package는 npm이다.
(일부의 경우는 npm대신 yarn으로 사용하기도 한다. - 추후 설명)



---

- 서버를 설치해보자

