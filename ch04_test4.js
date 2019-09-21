var Calc = require('./calc3');
//// Q-0. 객체는 무엇이며 인스턴스는 무엇인가?
//// A-0. 객체는 SW세계에 구현할 현실의 대상이고, 인스턴스는 SW세계에 구현된 실체이다. 

var calc = new Calc(); // new연산자를 이용 인스턴스객체인 calc 생성
//// Q-1. 그냥 Calc를 쓰면 될 것을 왜 var calc에 할당한건가?
//// A-1. 이렇게 하지 않고 Calc.emit('stop')을 하면 오류발생한다.
//// A-1. TypeError: Calc.emit is not a function
//// Q-2. 그렇다면 왜 이런 에러가 발생하는건가?
//// Q-2. Calc만으로 emit 메소드를 호출할 수 없는 이유는??
//// Q-3. require을 통해 모듈을 할당받은 객체가 Calc인데? new연산자는 뭔가 다른건가?
//// A-3. new연산자를 통해 인스턴스 객체인 calc를 만들었고, 이 calc객체는 Calc객체에 상속된 것들을 사용할 수 있다.

calc.emit('stop'); 
// 할당받은 Calc에는 EventEmitter객체를 상속받았고 이 Emitter객체안에있는 emit메소드를 호출하여 stop이벤트를 전달한다.

console.log(Calc.title + '에 stop이벤트 전달함');

