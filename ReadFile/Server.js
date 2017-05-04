var host = '172.50.3.191';
var port = 12346;
var netLib = require('net');
var server = netLib.createServer();
var fsLib = require('fs');
var fileStream = fsLib.createReadStream('C:/fileserver/abc.txt', {encoding: 'utf-8'});
server.listen(port, host);
server.on('listening', xulyLangnghe);
server.on('connection', xulyKetnoi);
function xulyLangnghe()
{
    console.log('server bat dau lang nghe tai dia chi ip la: '+ host +' cong la: ' +port);
}
function xulyKetnoi(socket)
{
    socket.on('data', xulyData);
    socket.on('close', xulyClose);
    socket.on('error', xulyLoi);
    function xulyData(data)
    {
        console.log('du lieu tu client: ' +data);
        fileStream.pipe(socket);
        socket.write('',xulyKhiguixong);
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
