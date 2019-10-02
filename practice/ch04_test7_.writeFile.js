// 파일을 읽는 것뿐만 아니라 쓰는 것까지 fs모듈에 정의
// 파일에 데이터를 써보자

var fs = require('fs');

// writeFile(생성파일명,적을내용,호출될콜백함수))
fs.writeFile('./filefile','For Freedom', function(err){
    if(err){
        console.log("Error : " + err); // 작업 중 오류 발생시 콜백함수로 오류객체 전달
    }
    console.log("Complete to make the file"); // 오류 객체가 null값이면 데이터 쓰기 완료
});

fs.writeFile('path','text',function(err){
    if(err){
        console.log("Error : ", err)
    }
    console.log("hood");
});
