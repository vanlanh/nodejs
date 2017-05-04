var host = '172.20.110.236';
var port = 1234;
var net = require('net');
var conn = net.createConnection(port, host);
console.log('Đã kết nối tới server');
var fsLib = require('fs');
var pathFileName = 'E:/dulieu.txt';
conn.write('Hello server, xin kiểm tra '+pathFileName+' cho Client');
conn.on('data', xuLyData);
function xuLyData(data){
    console.log('Server gửi đến bạn: '+data);
}
conn.on('close', xuLyClose);
function xuLyClose(){
    console.log('Đóng kết nối');
    conn.end();
}
conn.on('error', xuLyLoi);
function xuLyLoi(err){
    console.error('Lỗi kết nối: '+err.message+', code: '+err.code);
}