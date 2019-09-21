var util = require('util');
var EventEmitter = require('events').EventEmitter;

// Calc객체는 계산기 객체
// 프로토타입객체 생성
var Calc = function(){
    var self = this;

    self.on('stop',function(){
        console.log('stop event occurrence');
    });
};

// 콜백함수를 가지고 있는 계산기 객체 Calc
// 이벤트객체 EvnetEmitter를 상속
// 이벤트를 주고받을 수 있도록 한 것
util.inherits(Calc,EventEmitter); 
//// Q-1.왜 Calc,EventEmitter를 썼나?
//// A-1. EventEmitter객체를 Calc객체에 상속

Calc.prototype.add = function(a,b){
    return a+b;
};

module.exports = Calc;
module.exports.title = 'calculator'; 
//// Q-2. 왜 굳이 title속성의 이름값을 지정하나?
//// A-2. 이 모듈을 호출한 메인파일에서 Calc.title을 부르면 calculater라고 나오기 떄문
