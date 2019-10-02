/*
노드 설치시 기본적으로 들어있는 내장모듈

os모듈 : CPU, 메모리, 디스크 용량 정도를 확인하는데 쓰는 내장모듈
<os모듈의 메소드>
hostname() : os의 host name알려줌
totalmem() : system의 전체 memory 용량
freemem() : system 사용가능 메모리 용량
cpus() : cpu정보
networkInterface() : 네트웍 인터페이스 정보 담은 배열 객체 반환
*/
var os = require('os');

console.log('시스템의 hostname : %s',os.hostname());
console.log

/*
path모듈 : 파일을 다룰 때 파일 패스에서 파일이름을 폴더 이름과 구별하거나 파일이름에서 확장자 또는 확장자를 제외한파일이름을 알아내는 작업이 필요
<path모듈의 메서드>
join() : 이름들을 모두 합쳐 하나의 파일 패스로 생성, 파일 패스를 완성할 때 구분자 등을 알아서 조정
dirname() : 파일 패스에서 디렉터리 이름을 반환
basename() : 파일 패스에서 파일의 확장자를 제외한 이름 반환
extname() : 파일패스에서 파일의 확장자를 반환
 */

 var path = require('path');
// 디렉터리 이름 합치기
 var directories = ["users", "mike", "docs"];
 var docsDirectory = directories.join(path.sep); // Q. sep??
 console.log('문서 디렉터리 :%s', docsDirectory);
 
//디렉터리 이름, 파일이름 합치기
var curPath = path.join('/Users/mike', 'notepad.exe');
console.log('File Path : %s',curPath);
