/*
exports객체의 속성으로 변수나 함수를 지정하면 그 속성을 main.js와 같은 메인 js파일을 불러와 사용가능
모듈을 불러올 때는 require()메서드 사용. 모듈 파일의 이름을 이 메소드의 파라미터로 전달
require()메서드 호출시 모듈 객체가 반환되기에 exports객체에 설정한 속성들에게 접근가능

그러나, 만약 모듈파일의 코드 중 하나의 변수,함수,객체만을 할당하고 싶을 때는 module.exports를 사용
*/

// module.js 이파일을 호출하면 add,minus함수 모두를 사용가능
// exports 자체가 객체. 따로 생성하지 않아도 된다.
exports.add = function(a,b) {
    return a+b
};
exports.minus = function(a,b){
    return a-b
};

// module2.js 이파일을 호출하면 module.exports =calc에 정의된 calc함수만 사용가능
// 다른 파일에서 불러올 수 있는 모듈의 객체는 exports이기에 exports객체에 따로 함수를 할당해야한다.
var calc = {}; // 객체생성
var other = {};
calc.add = function(a,b){
    return a+b
};
other.minus = function(a,b){
    return a-b
};
module.exports = calc; // 앞서만든 calc객체를 exports객체에 할당해줌으로써 calc객체의 함수기능을 가짐. 타 js파일에서 module2.js모듈을 호출하면 calc기능만을 호춣함