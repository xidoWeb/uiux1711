# GULP
[TOC]
---

## 기본설치순서

### 1. 전역설치

```shell
 $ npm install -g gulp    // mac사용시 앞에 sudo 붙이기
```

### 1-1. npm 모듈 설치하기위한 json파일(package.json 파일 생성)

```shell
 $ npm init -y  
```

### 2. 사용할 폴더에 설치

```shell
 $ npm install --save-dev gulp  // 또는
 $ npm install -D gulp          // 또는
```

### 주의사항
 * 모듈 설치시 node_modules폴더가 생성되는데, github에 올리지 않도록 설정( .gitignore )
 * 깃사용하는 폴더 최상단에서  `.gitignore` 파일에 node_modules올리지 않도록 처리

```markdown
 # 모든폴더 내에있는 node_modules폴더는 깃에 전송하지 않음
 **/node_modules
```

 * 차후 다운받은 자료에서는 node_module이 존재하지 않으므로, package.json 파일을 통해 node_modules을 설치

```shell
 $ npm install 
```

---
### 필요한 모듈 설치방법

```shell
 $ npm install -D 사용할모듈이름
```

---
### 모듈 사용방법

1. `gulpfile.js` 문서를 생성

  ```javascript
    //모듈 불러오기
    var gulp = require('gulp');  // 걸프 불러와서 사용할 준비상태
    var gulp = require('모듈이름');  // 사용할 모듈 불러와서 처리
    // 걸프기능사용하기
    gulp.task('기능이름', function(){});
  ```
2. 걸프사용시 알아야할 기능
  1. task() : 임무할당(사용시) 작성
  2. src()  : 원본파일의 위치를 체크
  3. dest() : 변환하여 넘기는 위치
  4. pipe() : task()를 제외한 나머지를 연결하여 처리할때 사용하는 기능

---
### 권장 모듈
1. gulp (gulp사용시 필요)
2. chalk (window사용자는 적용안됨)
3. mk-dirs
4. del
5. jquery
6. gulp-jshint
7. gulp-outliner
8. node-font-awesome
9. browser-sync
10. gulp-svg2png
11. gulp-watch
12. gulp-sass
13. barbel
14. barbel-cli
15. ....


