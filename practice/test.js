function add(a,b,callback) {
    var result = a+b;
    callback(result);
    
    var count = 0
    var history = function() {
        count++
        return count + ' : ' + a, '+', b, '=', result;
    };
    return history;
}

var total = add(10,10,function(result){
    console.log('결과 : %d', result);
});

console.log(total());