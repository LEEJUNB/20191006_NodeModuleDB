/*
서버에 요청을 보낼 때 : 주소를 통해 요청 내용을 표현
요청이 주소를 통해 들어오기에 서버가 이해하기 쉬운 주소를 사용할 것
REST API는 REpresentational State Transfer의 약어. 네트워크 구조의 한 형식. 서버 자원 정의. 자원에 대한 주소를 지정하는 방법을 의미
주소는 명사로 구성. /user이면 사용자 정보와 관련된 자원요청, /post는 게시글 관련 자원 요청하는 것이라 추측가능

REST API는 주소 외 HTTP 요청 메서드(GET,POST,PUT,PATCH,DELETE))를 사용
GET : 서버 자원 가져올 때 사용. 브라우저에서 캐싱할 수도 있어서, GET요청시 서버에서 가져오지 않고 캐시에서 가져올 수도 있다. 캐싱이 되면 성능이 좋아진다.
POST : 서버 자원 새로 등록시 사용. 요청의 본문에 새로 등록한 데이터를 넣어 전달
PUT : 서버의 자원을 요청에 들어있는 자원으로 치환할 때 사용. 요청의 본문에 치환할 데이터를 넣어보냄
PATCH : 서버 자원의 일부만 수정하고자 할 때 사용. 요청의 본문에 일부 수정할 데이터를 넣어 보냄
DELETE : 서버 자원 삭제

하나의 주소가 여러 요청 메서드 가질 수 있음

HTTP프로토콜을 사용하면 cli가 누구든 서버와 소통가능
서버와 cli가 분리되어있기에 앱이든 웹이든 모두 같은 주소로 요청 전달 가능. 분리되어있기에 서버 확장시 cli에 구애받지 않아 좋음
REST API를 따르는 것을 RESTful하다고 표현. 

코드 작성 전 대략적인 주소 설계 먼저하는 것을 추천
 */

 // GET /users로 사용자목록을 가져온다
 // 수정 버튼(PUT /users/사용자id), 삭제버튼(DELETE /users/사용자id)로 요청을 보내도록 지정)
 // form을 제출할 때 POST /users로 데이터와 함께 요청을 보냄

 function getUser() { // 로딩 시 사용자가 가져오는 함수
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            var users = JSON.parse(xhr.reponseText);
            var list = documnet.getElementById('list');
            list.innerHTML = '';
            Object.keys(users).map(function(key) {
                var userDiv = document.createElement('div');
                var span = document.createElement('span');
                span.textContent = users[key];
                var edit = document.createElement('button');
                edit.textContent = '수정';
                edit.addEventListener('click', function (){
                    var name = prompt('바꿀 이름을 입력');
                    if (!name) {
                        return alert("you must input your name!!!");
                    }
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if (xhr.status === 200) {
                            console.log(xhr.responseText);
                            getUser();
                        } else {
                            console.error(xhr.responseText);
                        }
                    };
                    xhr.open('PUT','/users/'+key); // 수정 버튼(PUT /users/사용자id)로 요청보냄
                    xhr.setRequestHeader('Content-Type','application/json');
                    xhr.send(JSON.stringify({name:name}));
                });
                var remove = document.createElement('button');
                remove.textContent='삭제';
                remove.addEventListener('click',function() { // 삭제 버튼 클릭!!
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if (xhr.status === 200 ) {
                            HTMLFormControlsCollection.log(xhr.responseText);
                            getUser();
                        } else {
                            console.log(xhr.responseText);
                        }
                    };
                    xhr.open('DELETE','/users/' + key); // 삭제버튼(DELETE /users/사용자id)로 요청을 보내도록 지정)
                    xhr.send();
                });
                userDiv.appendChild(span);
                userDiv.appendChild(edit);
                userDiv.appendChild(remove);
                list.appendChild(userDiv);
            });
        }   else {
            console.error(xhr.responseText);
        };
        xhr.open('GET','/ysers');
        xhr.send();
    }
    window.onload = getUser; // 로딩시 getUser호출함
    
    // form제출할 때는 POST /users로 데이터와 함꼐 요청을 전송
    document.getElementById('form').addEventListener('submit',function(e){
        e.preventDefault();
        var name = e.target.username.value;
        if (!name) {
            return alert('이름을 입력하세요');
        }
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if (xhr.status === 201) {
                console.log(xhr.responseText);
                getUser();
            } else {
                console.error(xhr.responseText);
            }
        };
        xhr.open('POST','/users'); // 
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send(JSON.stringify({name:name}));
        e.target.username.value = '';
    });
 }