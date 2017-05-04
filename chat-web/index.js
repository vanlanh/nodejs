var express = require('express');
var app = express();
app.use(express.static('public'));

var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000);
var mangUser = [];

//Lang nghe ket noi
io.on('connection', function(socket){
    console.log('Co nguoi vua ket noi, socket id: ' + socket.id);
    //User dang ky gui username len server
    socket.on('user_send_username', function(data){
        console.log('Co nguoi dang ky username la: ' + data);
        if(mangUser.indexOf(data)>=0){
            socket.emit('server_send_dk_thatbai', data);
        }else{
            mangUser.push(data);
            socket.Username = data;
            io.sockets.emit('server_send_dk_thanhcong', {username:data, id:socket.id});
        }
    });

    socket.on('user_send_message', function(data){
        io.sockets.emit('server_gui_message', {Username:socket.Username, msg:data});
    });

    socket.on('user-chocgheo-socketid-khac', function(data){
        io.to(data).emit('server_xuly_chocgheo', socket.Username);
    });
});

app.get('/', function(req, res){
    res.sendfile(__dirname + '/public/chatapp.html');
});