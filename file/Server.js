var host = '172.20.110.236';
var port = 1234;
var netLib = require('net');
var server = netLib.createServer();
var fsLib = require('fs');
// var file = fsLib.readFile('E:/dulieu.txt',xuLyDaTa);
server.listen(port,host);
server.on('listening', xuLyLangNghe);
server.on('connection', xuLyKetNoi);
function xuLyLangNghe(){
    console.log('Server bắt đầu lắng nghe tại địa chỉ IP là: '+host+' và cổng: '+port);
}

function xuLyKetNoi(socket){
    // var file = fsLib.readFile('E:/dulieu.txt',xuLyDaTa);
    socket.on('data', xuLyDaTa);
    socket.on('close', xuLyClose);
    socket.on('error', xuLyLoi);
    function xuLyDaTa(data){
        console.log('Dữ liệu từ client: '+data);
        socket.write('Server đã nhận được', xuLyKhiGuiXuong);
        function kiemTraLoi(err){
            if(err){
                socket.write('Lỗi xảy ra trong quá trình đọc file');
            }else {
                socket.write('Đã đọc file thành công');
                socket.write(data.toString());
            }
        }
        function xuLyKhiGuiXuong(){
            console.log('Đã gửi thành công');
        }
    }
    function xuLyClose(){
        console.log('Đóng kết nối');
        socket.end();
    }
    function xuLyLoi(error){
        console.log('Lỗi có mã là: '+error.code+' thông điệp là '+error.message);
    }
}