// 비동기식 파일 읽기
var fs = require('fs');
// (파일이름,인코딩방식,콜백함수(오류발생,정상실행)))
fs.readFile('./package.json','utf8',function(err,data){
    console.log(data); // 오류발생시 err에 오류데이터가 들어가고 오류아니면 err변수의 값이 null
});

console.log('request to read the pakage.json');