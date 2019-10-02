/*
<이벤트 이해하기>
비동기방식으로 처리하기 위해 서로 이벤트를 전달

on(이벤트,리스너) : 이벤트가 전달될 객체에 이벤트 리스너를 설정하는 역할.
once(이벤트,리스너) : 이벤트리스너 함수가 한 번이라도 실행하고 나면 자동제거. 이벤트를 딱 한 번만 처리
emit() : 이벤트를 다른 쪽으로 전달

*/
process.on('exit', function() {
    console.log('exit 이벤트 발생함.');
});

setTimeout(function() {
    console.log('2초 후 시스템 종료 시도');
    process.exit();
},2000);

process.on('tick', function(count){
    console.log('tick event Occurrence  : %s', count);
});

setTimeout(function(){
    console.log('2sec later, Forward Events attempt');
    process.emit('tick','2');
});

setTimeout(function() {
    console.log('2 se later tick event attempt');
    process.emit('tick', '2');
},2000);


