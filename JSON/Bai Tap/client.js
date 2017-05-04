//khai báo địa chỉ host
var host = '172.50.23.76';
//khai báo cổng port
var port = 12345;
//khai báo biến net để lấy thư viện net
var net = require('net');
var fs = require('fs');
//khai báo biến conn để tạo kết nối đến host và port
var conn = net.createConnection(port, host);
//thông báo kết nối
console.log('Đã kết nối đến server');
//khai báo biến chứa yêu cầu
var maSV = '15513120018';
//yêu cầu của client gửi tới server thông qua biến conn
conn.write('Hello Server, xin gửi cho Client thông tin sinh viên với mã sau: ' + maSV);
//xử lý dữ liệu server gửi đến client

var file = null;

conn.on('data', function xuLyData(data){
    console.log('Server gửi đến bạn: '+data);
    if(file == null){
        file = fs.createWriteStream('list.txt');
    }
    file.write(data);
    console.log('Đã nhận thông tin của mã: '+maSV);
});
//xử lý đóng kết nối
conn.on('close', function xuLyClose(){
    console.log('Đóng kết nối');
    file.end();
    conn.end();
});
//xử lý lỗi
conn.on('error', function xuLyLoi(err){
    console.log('Lỗi kết nối có thông tin là: '+err.message+' và có mã: '+err.code);
});