// 동기식 파일 읽기
var fs = require('fs'); // 파일시스템 접근위해 fs모듈사용

// 동기식IO로 읽기. 읽을 파일명, 문자인코딩방식
var data = fs.readFileSync('./package.json', 'utf8');
console.log(data);