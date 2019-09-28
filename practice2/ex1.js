if (true) {
    var x  = 3;
}
console.log(x);

if (true) {
    const y =3;
}
console.log(y);

////// Object Literal
var sayNode = function() {
    console.log('Node');
};
var es = 'ES';
/////
// var oldObj = {
//     sayJS : function(){ // sayJS객체의 메서드에 함수를 연결
//         console.log('JS');
//     },
//     sayNode : sayNode,
// };
// oldObj[es + 6] = 'Factastic';

// oldObj.sayNode();
// oldObj.sayJS();
// console.log(oldObj.ES6);
//////
const newObj = {
    sayJS() {
        console.log('JS');
    },
    sayNode, // 속성명과 변수명이 겹치는 경우 한 번만 사용
    [es+6] : 'Fantastic', // 객체 내부 존재
};

newObj.sayNode();
newObj.sayJS();
console.log(newObj.ES6);
/////
// 속성명과 변수명이 겹치는 경우 한 번만 사용
// {name:name, age:age} // ES5
{name,age} // ES2015

// arrow function
function add1(x,y){
    return x + y;
}
const add2 = (x,y) => {
    x+y;
};
const add3 = (x,y) => x+y;
const add4 = (x,y) => (x+y);

function not1(x){
    return !x;
}
const no2 = x => !x;

// function this
