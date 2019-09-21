var calc = require('./module');
console.log(calc.add(10,10));

var calc2 = require('./module2');
console.log(calc2.add(10,10));

// 외장 모듈
// 시스템 환경 변수를 확인하기 위해 nconf 외장 모듈을 사용
var nconf = require('nconf');
nconf.env();
console.log('OS 환경 변수의 값 : %s', nconf.get('OS'));

// 미리 설치된 내장 모듈 사용하기
// 내장모듈 os
var os = require('os');

console.log("system's host name : %s", os.hostname());
console.log("system's memory : %s / %s",os.freemem(),os.totalmem());
console.log("system's cpu inf");
console.dir(os.cpus());
console.log("system's network interface inf \n");
console.dir(os.networkInterfaces());

// 내장모듈 path
// 파일 패스를 다룰 떄 필요한 메소드 제공
var path = require('path');

var directories = ["users", "mike", "docs"];
var docsDirectory = directories.join(path.sep);
console.log('Document Directary : %s', docsDirectory);

var curPath = path.join('/User/mike', 'notepad.exe');
console.log('file path : %s', curPath);

// url -> 객체로 변환
// 객체 -> url로 변환
var url = require('url');
var userURL = url.parse("https://land.naver.com/news/newsRead.nhn?type=headline&prsco_id=029&arti_id=0002554064");
var userStr = url.format(userURL);

console.log('addr str : %s', userStr);
console.log(userURL);5

// query에 있는 파라미터 정보 구분하기
var querystring = require('querystring');
var param = querystring.parse(userURL.query);

console.log('요청 파라미터 중 query 값 : %s', param.query);
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));

