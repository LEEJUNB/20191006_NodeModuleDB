var express = require('express'),
    http = require('http');

var app = express();
app.use(function(res,req){
    console.log("first middleware");

    var userAgent = req.header('User-Agent');
    var paramName = req.query.name;

    res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
    res.write();
    res.end();
});

app.use(function(req,res){
    console.log('');
})