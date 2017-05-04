var host = '172.110.43.46';
var port = 12345;
var netLib = require('net');
var server = netLib.createServer();
server.listen(port, host);
server.on('listening', xulyLangnghe);
server.on('connection', xulyKetnoi);
function xulyLangnghe()
{
    console.log('server bat dau lang nghe tai dia chi ip la: '+ host +' cong la: ' +port);
}
var fsLib = require('fs');
var fileName = 'C:/fileserver/ab.txt';
function xulyKetnoi(socket)
{
    socket.on('data', xulyData);
    socket.on('close', xulyClose);
    socket.on('error', xulyLoi);
    function xulyData(data)
    {
        console.log('du lieu tu client: ' +data);

        fsLib.stat(fileName,processExists);
        function processExists(error,stat)
        {
            if (error == null)
            {
                socket.write('File ' + fileName + ' ton tai', xulyKhiguixong);
            }
            else
            {
                socket.write('File ' + fileName + ' khong ton tai', xulyKhiguixong);
                console.log('Dong ket noi');
                socket.end();
            }
        }
        // socket.write('Hello Văn Lanh', xulyKhiguixong);
        function xulyKhiguixong()
        {
            console.log('da gui thanh cong');
        }
    }
    function xulyClose()
    {
        console.log('dong ket noi');
        socket.end();
    }
    function xulyLoi(error)
    {
        console.log('loi co ma la: '+ error.code +' thong diep la'+error.message);
    }
}