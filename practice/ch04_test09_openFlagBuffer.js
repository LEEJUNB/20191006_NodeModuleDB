var fs = require('fs');

fs.open('./output.txt','r',function(err,fd) {
    if(err) throw err;
    // DeprecationWarning: Buffer() is deprecated due to security and usability issues. 
    // lease use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
    var buf = new Buffer.alloc(10); 
    console.log('buffer type : %s', Buffer.isBuffer(buf));

    fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer) {
        if(err) throw err;

        var inStr = buffer.toString('utf8',0,bytesRead);
        console.log('파일에서 읽은 데이터 : %s', inStr);

        console.log(err,bytesRead, buffer);
        fs.close(fd,function() {
            console.log('complete to open and read new file ')
        });
    });
});