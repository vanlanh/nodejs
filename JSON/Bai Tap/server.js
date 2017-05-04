//khai báo địa chỉ host
var host = '172.50.23.76';
//khai báo cổng port
var port = 12345;
//khai báo biến net để lấy thư viện net
var net = require('net');
//khai báo biến server để tạo server
var server = net.createServer();

//server lắng nghe địa chỉ host và cổng port
server.listen(port, host);

//server xử lý lắng nghe
server.on('listening', function xuLyLangNghe(){
    console.log('Server bắt đầu lắng nghe tại địa chỉ: '+host+' và cổng: '+port);
});

var listSV = [
    {
        'maSV': '15513120018',
        'ten': 'Trần Văn Lanh',
        'nSinh': '17/5/1997',
    },
    {
        'maSV': '15513120019',
        'ten': 'Phạm Công Luận',
        'nSinh': '10/1/1997',
    },
    { 
        'maSV': '15513120048',
        'ten': 'Võ Quang Phước',
        'nSinh': '19/9/1997',
    }        
];

//server xử lý kết nối
server.on('connection', function xuLyKetNoi(socket){

    //socket xử lý dữ liệu, biến socket dùng để kết nối từ server đến client
    socket.on('data', function xuLyData(data){

        //hiện thông báo đã lấy dữ liệu từ Client
        console.log('Dữ liệu từ Client: '+data);

        //Hàm tìm đối tượng trong mảng
        function timSV(data) {
            for(var i=0; i<listSV.length; i++){
                if(listSV[i]['maSV'] == data){
                    socket.write(listSV[i]['maSV']);
                    socket.write(listSV[i]);
                }
            }
        }

        timSV(data);

        //server gửi đến client thông báo thông qua biến socket
        socket.write('', function xuLyGuiXuong(){
            console.log('Đã gửi thành công');
        });
    });

    //socket xử lý việc đóng kết nối giữa server với client
    socket.on('close', function xuLyClose(){
        console.log('Đóng kết nối');
        //socket gọi đến lệnh đóng
        socket.end();
    });

    //socket xử lý khi có lỗi
    socket.on('error', function xuLyLoi(err){
        console.log('Lỗi có mã là: '+err.code+' thông điệp là: '+err.message);
    });
});

