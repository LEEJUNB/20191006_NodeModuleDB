// 객체를 만들고, 이 객체를 module.exports에 할당
var calc = {};
calc.add = function(a,b) {
    return a+b;
};

module.exports = calc; // exports에 객체를 할당함