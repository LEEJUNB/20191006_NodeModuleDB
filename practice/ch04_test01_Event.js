/*
주소 문자열을 URL객체로 변환하기
parse() : 주소문자열을 파싱하여 URL객체 생성
format() : URL객체를 주소 문자열로 변환
*/

var url = require('url');
// 주소 문자열로 URL 객체를 만들기
var curURL = url.parse('');
// URL 객체를 주소 문자열을 만들기
var curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.log(curURL);