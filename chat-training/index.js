var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
//Tạo Server
var server = require('http').Server(app);
//Tạo biến io để quản lý socket io realtime
var io = require('socket.io')(server);
server.listen(3000);

//Mảng chứa danh sách username
var mangUserOnline = [];

//Lắng nghe kết nối
io.on('connection', function(socket){
    console.log('Có người vừa kết nối, socket id: ' + socket.id);
    socket.on('client_gui_username', function(data){
        console.log('Có người đăng ký username là: ' + data);
        if(mangUserOnline.indexOf(data)>=0){
            socket.emit('server-send-dangky-thatbai', data);
        }else{
            mangUserOnline.push(data);
            socket.Username = data;
            io.sockets.emit('server-send-dangky-thanhcong', {username:data, id:socket.id});
        }
    });

    socket.on('client_gui_message', function(data){
        io.sockets.emit('server_gui_message', {Username:socket.Username, msg:data});
    });

    socket.on('user-chocgheo-socketid-khac', function(data){
        io.to(data).emit('server_xuly_chocgheo', socket.Username);
    });
});

app.get('/', function(req, res){
    res.render('trangchu');
});