var http = require("http");
var server = http.createServer();

var port = 3000;
server.listen(port,function(){
    console.log("server is starting");
});

server.on("connection",function(socket){
    var addr = socket.address();
    
})