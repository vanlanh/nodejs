var host = '172.50.32.222';
var port = 12345;
var net = require('net');
var fsLib = require('fs');
var conn = net.createConnection(port, host);
console.log("da ket noi toi server");
conn.write('Hello Server, xin gửi file cho Client');
conn.on('data', processData);
conn.on('close',processClose);

//tao một biến fileStream, ban đầu có giá trị rỗng
var fileStream = null;

function processData(data) 
{
    console.log('Server gui den ban:   ' +data);
    /*neu luồng ghi file la rỗng (null - chữa được khởi tạo), ta cần gọi hàm để tạo một luồng ghi file.*/
    if (fileStream == null)
    {
        fileStream = fsLib.createWriteStream('C://temp/test2.txt');
    }
    fileStream.write(data);
    console.log('Đã nhận');
}
conn.on('error', processerror);
function processerror(err)
{
    console.error('Loi ket noi:' + err.message +', code: ' + err.code);
}
function processClose()
{
    /*Sau khi nhận được file, luồng ghi file đã ghi toàn bộ hết nội dung file đã nhận, ta cần đóng lại luồng*/
    fileStream.end();
    conn.end();
}
