var HOST='192.168.1.22';
var PORT = 12345;
var dgramLib = require('dgram');
var serverSocket = dgramLib.createSocket('udp4');
serverSocket.bind(PORT,HOST);
serverSocket.on('listening',xulyLangnghe);
serverSocket.on('message', xulyDulieu);
var d=new Date;

function xulyLangnghe()
{
   var thongtinServer = serverSocket.address();
     
    console.log('Server bat dau lang nghe day o dia chi: '+thongtinServer.address + ' Cổng: '+thongtinServer.port);
 }
function xulyDulieu(data,client)
 {
     console.log('Server nhan duoc thong tin: '+ data);
     console.log(client);
     var buffer = new Buffer('Ngày của client: '+d.UTC());
     serverSocket.send(buffer,0,buffer.length,client.port,client.address);
 }