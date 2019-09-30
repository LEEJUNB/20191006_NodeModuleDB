/*
서버에 사용자 정보를 저장하고 클라이언트와는 세션 아이디로만 소통
세션아이디는 쿠키가 없어도 가능
많은 웹 사이트에서 쿠키를 사용하는 이유는 쿠키를 사용하는 방법이 쉽기 때문
쿠키를 세션아이디로 사용하는 방식을 실습하나 실제 배포용에선 세션을 변수에 저장하지 않는다.
서버가 멈추거나 재시작시 메모리에 저장된 변수가 초기화돠기 때문
서버 메모리가 부족하면 세션을 저장하지 못하기도 함
그래서 보통 DB에 넣는다.

현재 방법은 세션 아이디 값이 공개되어 타인이 쓸 수 있다. 보안상 취약함
*/

const http = require('http'),
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

const session = {};

http.createServer((req,res) => {
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith('/login')) {
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        const randomInt = +new Date();
        session[randomInt] = { // 사용자의 이름, 만료시간을 이 객체에 저장
            name,
            expires,
        };
        res.writeHead(302, {
            Location:'/',
            'Set-Cookie':`session=%{randomInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`, // 이전에는 쿠키에 이름담아 전송했으나 randonInt를 전송
        });
        res.end();
    } else if (cookies.session && session[cookies.session].expires > new Date()) {
        res.writeHead(200, { 'Content-Type':'text/html; charset=utf-8'});
        res.end(`$session[cookies.session].name}'s Hello`);
    } else {
        fs.readFile('./server4.html',(err,data) => {
            if (err) {
                throw err;
            }
            res.end(data);
        });
    }
})
    .listen(8084, () => {
        console.log('8084번 포트에서 서버 대기 중');
    });

