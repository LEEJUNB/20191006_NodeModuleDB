var fs = require('fs');

// writeFile(생성파일명,내용,콜백함수))
fs.writeFile('./filefile','For Freedom', function(err){
    if(err){
        console.log("Error : " + err);
    }
    console.log("Complete to make the file");
});