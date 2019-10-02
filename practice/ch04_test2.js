/*
<이벤트 이해하기>
이벤트 : 한쪽에서 다른 쪽으로 어떤 일이 발생했음을 알려주는 것
이벤트 리스너 : 다른 쪽에서 이 이벤트를 받고 싶을 때 등록하는 것. 특정 이벤트 전달시 그 이벤트 처리할 수 있게 만든 것.
비동기방식으로 처리하기 위해 서로 이벤트를 전달

on(이벤트,리스너) : 이벤트가 전달될 객체에 이벤트 리스너를 설정
once(이벤트,리스너) : 이벤트리스너 함수가 한 번 실행 후 자동제거. 이벤트를 딱 한 번만 처리
emit() : 이벤트를 다른 쪽으로 전달

*/

// 한쪽에서 이벤트를 만들어 전달가능, 다른 쪽에서 그것받아 처리가능
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

setTimeout(function() {
    console.log('2 se later tick event attempt');
    process.emit('tick', '2');
},2000);

// process객체는 내부적으로 EventEmitter를 상속받기에 on(), emit()메소드 바로 사용 가능
process.on('tick', function(count){
    console.log('tick 이벤트 발생 : %s', count);
});
setTimeout(function(){
    console.log();
    process.emit('tick','2');
},2000);

// 그러나 process객체 사용해 이벤트 전달한다면 충돌발생할수있기에 별도의 모듈파일을 만들어 이벤트 처리할 것
var util = require('util'); // inherits라는 상속 메서드 쓰기 위함
var EventEmitter = require('events').EventEmitter; // 이벤트 모듈안에 속성으로 들어있는 Emitter객체

var Calc = function() {
    var self = this;
    this.on('stop',function(){
        console.log('Calc에 stop event 전달');
    });
};

util.inherits(Calc, EventEmitter);
Calc.prototype.add = function(a,b){
    return a+b;
}
module.exports = Calc;
module.exports.title = 'calculator';