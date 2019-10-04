var fs = require('fs');

// 파일에 데이터를 씁니다
fs.open('./newfile1004','w',function(err,fd){
    if(err) throw err;

    var buf = new Buffer('Hello\n');
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
        if(err) throw err;

            console.log(err, written, buffer);
        fs.close(fd,function() {
            console.log('file open complete');
        });
    });
});