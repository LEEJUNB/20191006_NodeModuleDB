// set메소드로 속성을 설정하는 방법

var express = require('express'),
    http = require('http'); // express모듈은 http모듈위에서 동작하기에 http모듈도 불러옴

// express 객체 생성
var app = express(); /// express함수호출하여 객체에 저장

/*
기본 포트를 익스프레스 객체인 app에 설정. app객체에 서버 설정을 위한 속성을 지정
port속성 설정시 process.env객체에 PORT속성이 있으면 그 속성을 사용, 없으면 3000번 포트 번호 사용
설정한 포트번호는 listen()메서드 호출시 app.get('port')와 같은 코드를 사용하여 포트 속성을 꺼낸 뒤 파라미터로 전달됨
포트 속성은 웹 서버의 포트 지정시 사용하는 정보
*/
app.set('port', process.env.PORT || 3000); // app.set()은 app객체에 정의된 함수를 호출. set속성으로 익스프레스 서버 설정 및 app객체에 정의된 함수 호출, env는 서버모드설정, port속성은 웹 서버포트지정시사용
/*
<Start Express server>
createServer메서드는 웹서버객체생성, 이 메서드를 호출하여 만든 객체에 들어있는 listen()메서드를 호출하면 웹서버시작
listen메소드는 클라이언트 요청대기, 웹서버실행역할
cerateServer메소드에 전달달되는 app.get('port')는 포트속성을 꺼내서 파라미터로 전달.
app객체는 express()메소드 호출로 만들어지는 익스프레스 서버 객체
*/
http.createServer(app).listen(app.get('port'), function(){ // app.get('port')를 이용하여 포트속성을 꺼냄
    console.log('익스프레스 서버를 시작했습니다. : ' + app.get('port'));
});
/*
메소드 정리
set(name, value) : 서버설정을 위한 속성지정, set()메소드로 지정한 속성은 get메소드로 꺼내어 확인
get(name) : 서버설정위한 지정 속성을 꺼내옴
get(path,function) : 특정 패스로 요청된 정보 처리
use(path,function) : 미들웨어 함수 사용

서버설정을 위해 미리 정해진 app객체의 주요속성
env : 서버 모드 설정
views : 뷰들이 들어있는 폴더, 폴더배열을 설정
view engine : 디폴트로 사용할 뷰 엔진 설정, ejs나 pug를 많이 사용. 뷰엔진은 클라이언트에 보낼 응답 웹 문서를 만들 때 사용. cli에게 응답시 사용하는 템플릿을 결정함


그러나 실행시켜도 응답이없음
미들웨어가 없으면 localhost:3000으로 접속해도 응답없기 때문
use()메서드를 이용하여 미들웨어를 설정하여 응답하도록 만들자
*/