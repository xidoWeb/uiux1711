// gulpfile.js

var gulp  = require('gulp');
var fs    = require('fs');
var chalk = require('chalk');
var mkdir = require('mk-dirs');

// ----------------------------------------
// 기본 경로 설정
var url = {before:'./public/src/', after:'./public/dist/'};

// ----------------------------------------
// mkdir모듈을 이용하여 기본 폴더생성
gulp.task('makedir', function() {
  Promise.all([
    mkdir('public'),
    // before
    // mkdir(url.before),
    // mkdir(url.before + 'html'),
    mkdir(url.before + 'html/src'),
    // mkdir(url.before + 'css'),
    mkdir(url.before + 'css/base'),
    mkdir(url.before + 'css/src'),
    // mkdir(url.before + 'js'),
    mkdir(url.before + 'js/base'),
    mkdir(url.before + 'js/src'),
    mkdir(url.before + 'img'),
    // mkdir(url.before + 'media'),
    mkdir(url.before + 'media/audio'),
    mkdir(url.before + 'media/video'),
    mkdir(url.before + 'font'),
    // after
    // mkdir(url.after),
    mkdir(url.after + 'img'),
    mkdir(url.after + 'media'),
    mkdir(url.after + 'font')
    ]);
});

gulp.task('makefile', function(){
  fs.writeFile(url.before+'index.html', '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <script>\n    window.location = "./html/main.html";\n  </script>\n  <title>Document</title>\n</head>\n<body>\n  \n</body>\n</html>');

  fs.writeFile(url.before+'html/main.html','\n <!DOCTYPE html>\n <html lang="ko-KR">\n <head>\n   <meta charset="UTF-8">\n   <meta name="viewport" content="width=device-width, initial-scale=1.0">\n   <meta http-equiv="X-UA-Compatible" content="ie=edge">\n   <!--[if lte IE9]>\n     <script src="../js/base/html5shiv-printshiv.js"></script>\n     <script src="../js/base/html5shiv.js"></script>\n   <![endif]-->\n   <!-- fontAwesome and nanumGothicFont -->\n   <link rel="stylesheet" href="../fontAwesome/css/font-awesome.css">\n   <link rel="stylesheet" href="../font/transfonterNanum/stylesheet.css">\n   <!-- css Reset and globalClass -->\n   <link rel="stylesheet" href="../css/base/reset.css">\n   <link rel="stylesheet" href="../css/base/common.css">\n   <!-- use css -->\n   <link rel="stylesheet" href="../css/multimedia_02.css">\n   <!-- faviconFile -->\n   <link rel="apple-touch-icon" href="../favicon.png">\n   <link rel="shortcut icon" href="../favicon.png" type="image/x-icon">\n   <title>siteName</title>\n </head>\n <body>\n   #wrap>header#headBox+section#bannerBox+article#contentBox+footer#footBox\n   \n   <!-- script -->\n   <script src="../js/base/jquery-3.2.1.js"></script>\n   <script src="../js/base/jquery-ui.js"></script>\n   <!-- use script -->\n   <script src="../js/src/base.js"></script>\n </body>\n </html>\n ');

  fs.writeFile(url.before+'css/base/reset.css','/* reset.css */\n /* variable:color, size, font  */\n /* \n * color: *명도대비 기준으로 제작\n       - primary : #d07\n       - main : #faa\n       - point :\n       - font1 : #333\n       - font2 : #777\n       - font3 : #fff\n       - link :  #d07\n       - sub1 :\n       - sub2 :\n       - white : #fdfdfd\n       - gray1 : #333\n       - gray2 : #777\n       - black : #171717\n \n * size:* 접근성 크기의 내용을 기준\n * 인쇄의 경우는 기준의 폰트크기는 : 9pt, \n * 웹의 경우는 12pt를 권장 => 영문, 그래픽이미지일경우\n       - primary : 16px;  == 1rem;\n       - h1(bold) :  32px ==> 2rem;\n       - h2(bold) :  29px ==> 1.8125rem;\n       - h3(bold) :  28px ==> 1.75rem;\n       - h4(bold) :  24px ==> 1.5rem;\n       - h5(bold) :  22px ==> 1.375rem;\n       - h6(bold) :  20px ==> 1.25rem;\n       - big1 : 30pt ==> 2.5rem\n       - big2 : 27pt ==> 2.25rem\n       - narmal : 12pt ==> 1rem  \n \n * font:\n       - english : Roboto, "myriad pro", arial\n       - korean  : "Nanum Gothic Coding", dotum\n       - basic   : monospace, sans-serif\n \n * border:\n       - thin :  border:1px solid #333\n       - normal: border: 2px solid #777\n       - bold :  border: 5px solid #d07\n \n * responsive:\n       - mobileV :\n       - mobileH :\n       - tableV:\n       - tableH:\n       - pc :\n       - pcfull :\n */\n \n \n \n /* base */\n html,body{width: 100%; height: 100%; \n         margin:0; padding:0; color:#333; font-size:16px; font-size:1rem;      \n font-family:Roboto,"myriad pro",arial,"Nanum Gothic Coding",dotum,monospace,sans-serif;   \n         -webkit-text-size-adjust: 100%;\n         -ms-text-size-adjust: 100%;}\n \n h1, h2, h3, h4, h5, h6, p, pre, ul, ol, li, dl, dt, dd, div, \n table, thead, tbody, tfoot, tr, th, td, \n form, fieldset, legend, input, textarea, select,\n a, img,figcaption, figure{\n   margin:0; padding:0; border:0; outline:0; \n   color:inherit;  font-size:inherit; font-family:inherit;}\n \n table,tr,td,th,thead,tbody,tfoot{border-collapse:collapse; border-spacing:0; }\n thead{background-color:#d07; color:#fff; text-indent:0;}\n tbody>tr:nth-of-type(2n+1){background-color:#faa; text-indent:0.5rem;}\n tbody>tr:nth-of-type(2n){background-color:#fff; text-indent:0.5rem;}\n tfoot{background-color: #7cf; font-weight: bold;}\n th,td{border:1px solid #777; border-left:0; border-right: 0;}\n /*th:first-of-type, td:first-of-type{border-left:0;} \n th:last-of-type,  td:last-of-type{border-right: 0;} */\n \n hr{margin: 0; padding: 0; border-bottom:1px solid #333;}\n \n address, em, wbr, strong, ins, del, abbr{font-style:normal; font-weight:normal;}\n h1{font-size: 32px; font-size: 2rem;}\n h2{font-size: 29px; font-size: 1.8125rem;}\n h3{font-size: 28px; font-size: 1.75rem;}\n h4{font-size: 24px; font-size: 1.5rem;}\n h5{font-size: 22px; font-size: 1.375rem;}\n h6{font-size: 20px; font-size: 1.25rem;}\n \n ul,ol,li{list-style:none; }\n a{text-decoration:none; color:#777;}\n a:hover, a:active{text-decoration:underline; color:#D07;}\n \n \n code{ padding:6px; border:1px solid #777; background-color: #7af; }\n kbd {font-size: 1.2em; font-weight: bold; color:#fff; background-color: #333; border-radius:0.3rem;} \n /* form ============================================ */\n input[type="text"],\n input[type="password"],\n input[type="search"],\n input[type="email"],\n input[type="tel"],\n input[type="number"],\n input[type="date"],\n input[type="month"],\n input[type="year"],\n input[type="week"],\n input[type="url"],\n textarea{cursor:pointer; box-sizing:border-box; border:1px solid #777; border-radius:0;\n       background-color: #fff; text-indent:5px;} \n \n input::-webkit-input-placeholder,\n input::-moz-placeholder,\n input:-ms-input-placeholder,\n input:-moz-placeholder,\n input:placeholder {color:#09a;}\n \n select{-webkit-appearance:listbox;\n        -moz-appearance:listbox;\n         appearance:listbox; border: 0;}\n \n input[type="submit"],\n input[type="reset"],\n input[type="image"],\n input[type="file"],\n input[type="button"],\n button, select {cursor:pointer; border-radius:0; \n   margin: 0; padding: 0; border: 0; outline: 0;}\n \n /*  html5 ============================================  */\n header, nav, article, section, footer, aside, main, figure, figcaption, picture{\n   display:block; color:inherit;}\n \n ');
  fs.writeFile(url.before+'css/base/common.css','/* common.css */\n .clearfix:after{content:" "; display:block; width:100%; height:0; clear:both;}\n .clearfix::after{content:" "; display:block; width:100%; height:0; clear:both;}\n \n .hidden_wrap a>span, \n .hidden{display:block; width:0; height:0; position:absolute; z-index:-100; overflow:hidden;}\n .hidden_wrap a{display:block; width:100%; height:100%;}\n \n #wrap ul>.first, \n #wrap ol>.first{margin-left:0; border-left:0;}\n #wrap ul>.last, \n #wrap ol>.last{margin-right:0; border-right:0;}\n #wrap ul>.top, \n #wrap ol>.top{margin-top:0; border-top:0;}\n #wrap ul>.bottom, \n #wrap ol>.bottom{margin-bottom:0; border-bottom:0;}\n \n .wrap{width: 100%; height: auto;}\n .wrap_full {width: 100%; min-width: 960px; height: auto; margin: 0 auto;}\n .wrap:after, .wrap_full:after {content:" "; display: block; clear: both;}\n \n @media screen and (min-width:1024px){\n   .wrap {width: 960px;  margin: 0 auto;}\n   .wrap_full {width: 100%; min-width: 960px;}\n }\n \n \n /* accessibility.css */\n a:focus, button:focus,\n input[type="submit"]:focus,\n input[type="reset"]:focus,\n input[type="image"]:focus,\n input[type="file"]:focus,\n input[type="button"]:focus{outline:2px solid #d07; outline-offset:3px;\n                           background-color:#d07; color:#fff; }\n \n input[type="text"]:focus,\n input[type="password"]:focus,\n input[type="search"]:focus,\n input[type="email"]:focus,\n input[type="tel"]:focus,\n input[type="number"]:focus,\n input[type="date"]:focus,\n input[type="month"]:focus,\n input[type="year"]:focus,\n input[type="week"]:focus,\n input[type="url"]:focus,\n textarea:focus{outline:2px solid #d07; outline-offset:3px;\n               background-color:#faa;}\n \n \n /* grid_responsive.css */\n .row{width:auto; height: auto;}\n .row:after{content:" "; display: block; clear: both;}\n \n @media screen and (max-width:480px) {  \n   /* 100 / 6 = 16.6666666 */\n   .mob_1{float:left; width:16.666667%;}\n   .mob_2{float:left; width:33.333333%;}\n   .mob_3{float:left; width:50%;}\n   .mob_4{float:left; width:66.666667%;}\n   .mob_5{float:left; width:83.333333%;}\n   .mob_6{float:left; width:100%;}\n }\n \n @media screen and (min-width:481px) {\n   /* 100 / 9 = 11.111111 */\n   .tab_v_1{float:left; width:11.111111%;}\n   .tab_v_2{float:left; width:22.222222%;}\n   .tab_v_3{float:left; width:33.333333%;}\n   .tab_v_4{float:left; width:44.444444%;}\n   .tab_v_5{float:left; width:55.555556%;}\n   .tab_v_6{float:left; width:66.666667%;}\n   .tab_v_7{float:left; width:77.777778%;}\n   .tab_v_8{float:left; width:88.888889%;}\n   .tab_v_9{float:left; width:100%;}\n }\n \n @media screen and (min-width:768px){\n   /* 100 / 12 = 8.333333 */\n   .tab_pc_1{float:left; width:8.333333%;}\n   .tab_pc_2{float:left; width:16.666666%;}\n   .tab_pc_3{float:left; width:25%;}\n   .tab_pc_4{float:left; width:33.333332%;}\n   .tab_pc_5{float:left; width:41.666665%;}\n   .tab_pc_6{float:left; width:50%;}\n   .tab_pc_7{float:left; width:58.333331%;}\n   .tab_pc_8{float:left; width:66.666664%;}\n   .tab_pc_9{float:left; width:75%;}\n   .tab_pc_10{float:left; width:83.333333%;}\n   .tab_pc_11{float:left; width:91.666663%;}\n   .tab_pc_12{float:left; width:100%;}\n }\n @media screen and (min-width:1367px) {\n   /* 100 / 12 = 8.333333 */\n   .pc_full_1{float:left; width:8.333333%;}\n   .pc_full_2{float:left; width:16.666666%;}\n   .pc_full_3{float:left; width:25%;}\n   .pc_full_4{float:left; width:33.333332%;}\n   .pc_full_5{float:left; width:41.666665%;}\n   .pc_full_6{float:left; width:50%;}\n   .pc_full_7{float:left; width:58.333331%;}\n   .pc_full_8{float:left; width:66.666664%;}\n   .pc_full_9{float:left; width:75%;}\n   .pc_full_10{float:left; width:83.333333%;}\n   .pc_full_11{float:left; width:91.666663%;}\n   .pc_full_12{float:left; width:100%;}\n }\n ');

});

// del
// gulp.task('default');   
// gulp.task('name', []);
// browser-sync
// 병합, 압축, 난독화....
// 변환(convert)

// ----------------------------------------
/*
걸프 주요기능 이해하기
1. task()
 의미상 일을하다 라는 의미를 가지고 있듯! 
 원하는 기능을 수행하기위한 메소드
  걸프 수행 이름을 작성하고, 기능을 수행하도록 처리

*/

/* 
 gulp
 browser-sync
 chalk
 mk-dirs
*/