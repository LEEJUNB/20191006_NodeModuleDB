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


