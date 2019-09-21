var Calc = require('./calc3');

// var calc = new Calc(); // new연산자를 이용 인스턴스 생성
//// Q-1. 그냥 Calc를 쓰면 될 것을 왜 var calc에 할당한건가?
//// A-1. 이렇게 하지 않고 Calc.emit('stop')을 하면 오류발생한다.
//// A-1. TypeError: Calc.emit is not a function
//// Q-2. 그렇다면 왜 이런 에러가 발생하는건가?
//// Q-2. require을 통해 모듈을 할당받은 객체가 Calc인데? new연산자는 뭔가 다른건가?

Calc.emit('stop'); 
// 할당받은 Calc에는 EventEmitter객체를 상속하는데 이 객체에 있는 emit메소드를 호출하여 stop이벤트를 전달한다.

console.log(Calc.title + '에 stop이벤트 전달함');