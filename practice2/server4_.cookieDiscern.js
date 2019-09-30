/*
주소가 
 */

const http = require("http"),
    fs = require('fs'),
    url = require('url'),
    qs = require('querystring');

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k,v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        },{});

/*
주소가 /login으로 시작할 경우 url과 querystring 모듈로 각각 주소와 주소에 딸려오는 쿼리분석
쿠키 만료 시간도 5분 뒤로 설정
302응답코드는 리다이렉트 주소와 함꼐 쿠키를 헤더에 삽입. 브라우저는 이 302응답코드보고 페이지를 해당 주소로 리다이렉트
헤더에는 한글 설정할 수 없기에 name변수를 encodeURIComponent 메서드로 인코딩
*/
http.createServer((req,res) => {
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith('/login')) {
        const { query } = url.parse(req.url);
        const {name } = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, {
            Location:'/',
            'Set-Cookie':`name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`, // 'Expires=날짜'는 쿠키의 만료 기한, HttpOnly설정시 JS에서 쿠키접근안됨. 쿠키조작방지위해 설정하는게 좋음, 'Path=URL'은 쿠키 전송될 URL을 특정가능 기본값은 '/' 이경우 모든 URL에서 쿠키 전송가능
        });
        res.end();
/*
그 외의 경우 쿠키 있는지 확인
쿠키 없으면 로그인하는 페이지로 보냄. 첫 방문시 쿠키가 없기에 server4.html을 전송
쿠키가 있다면 로그인한 상태로 간주하고 인사말 전송
res.end메서드에 한들이 들어가면 인코딩 문제 발생하기에 res.writeHead에 Content-Type을 text/html;charset=utf8로 설정해 인코딩 명시
*/
    } else if (cookies.name){
        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.end(`${cookies.name}'s Hello!`);
    } else {
        fs.readFile('./server4.html',(err,data) => {
            if (err) {
                throw err;
            }
            res.end(data);
        });
    }
})
    .listen(8083, () => {
        console.log('8083번 포트에서 서버 대기중! ');
    });