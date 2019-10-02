/*
파라미터로 함수(콜백함수)를 전달하는 경우 대부분은 비동기 프로그래밍 방식으로 코드를 만들때임.
콜백함수 : 파라미터로 전달되는 함수, 함수가 실행되는 중간에 호출되어 상태 정보를 전달하거나 결과 값을 처리하는데 사용
 */



 function add(a,b, callback) {
     var result = a+b; 
     callback(result); // 더 이상 반환하지 않도록 return키워드 사용 코드 부분을 삭제
 }

 // 콜백함수는 add()함수 호출시 파라미터로 전달하거나 
 //                           익명함수로 만들어 파라미터로 전달 가능.
 add(10,10, function(result){ // 더하기 연산을 한 결과 값 result는 콜백함수의 파라미터로 전달되어 콜백함수로 전달
     console.log('Plus!! (10,10) result : %d', result);
 });

 //위는 다른 함수를 파라미터로 전달하는 방법이었으나
 //아래는 새 함수를 만들어 반환
 function add(a,b,callback){
     var result2 = a+b;
     callback(result2);

     var history = function() {
         return a + ' + ' + b + ' = ' + result2;
     };
     return history;
 }