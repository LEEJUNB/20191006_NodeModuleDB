/*
외장모듈 : 개발자가 직접만들어 올린 모듈
npm으로 설치해야 한다.
npm init
npm install * --save
nconf  : 시스템 환경 변수 접근 가능  
*/

var nconf = require('nconf');
nconf.env();

console.log('OS환경 변수의 값 : %s', nconf.get('OS'));