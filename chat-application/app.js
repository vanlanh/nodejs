var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

// Khởi tạo server
app.get('/', function(req, res){
    var express=require('express');
    app.use(express.static(path.join(__dirname)));
    res.sendfile(path.join(__dirname, '../chat-application/index.html'));
});

// Đăng ký các sự kiện của socket
io.on('connection', function(socket){
    socket.on('chatMessage', function(from, msg){
    io.emit('chatMessage', from, msg);
    });
    socket.on('notifyUser', function(user){
    io.emit('notifyUser', user);
    });
});

// Mở cổng lắng nghe của socket là 3000
http.listen(3000, function(){
    console.log('listening on *:3000');
});