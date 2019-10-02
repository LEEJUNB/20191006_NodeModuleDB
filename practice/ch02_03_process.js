/*
<process객체>는 프로그램 실행시 만들어지는 프로세스 정보 다루는 객체
<process객체의 주요 속성과 메소드>
argv : 프로세스를 실행할 때 전달되는 파라미터 정보

env : 환경 변수 정보. 
그러나 사용자 정의 환경 변수(현재사용중인 윈도우 사용자 계정에만 적용되는값)만 확인 가능하고 OS변수 같은 시스템환경변수에는 접근 불가. process.env[OS]를 입력하면 오류발생
시스템환경변수에 접근하고자 한다면 nconf 외장모듈을 사용할 것

exit() : 프로세스 끝내는 메소드 
*/

 // terminal창에 node ch02.js 를입력하여 이 파일을 실행하면 터미널에는
 // node.exe파일의 패쓰, ch02.js파일의 패쓰가 출력된다.
 console.log("파라미터 수 : " + process.argv.length); // JS파일을 실행한 노드.exe프로그램이 첫번쨰 파라미터, 파일의 패스가 두번째 파라미터
 console.dir(process.argv); // dir()메소드는 객체가 가진 속성을 그대로 출력한다. argv속성은 배열 객체이며 실행만해도 노드명령, 파일패스가 파라미터값으로 들어간다.

 // 세번째 파라미터 값을 확인하는 코드
 if (process.argv.length > 2) {
     console.log("세번째 파라미터 값 : " +process.argv[2]);
 }

 process.argv.forEach(function(item,index){ // forEach메소드 : argv속성의 모든 값을 하나씩 출력
    console.log(index + ' : ', item);
 });