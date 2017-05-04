var HOST='192.168.1.22';
var PORT = 12345;
var dgramLib = require('dgram');
var socketClient = dgramLib.createSocket('udp4');
var d=new Date;
var buffer = new Buffer('Ngày của client: '+d.toTimeString());
socketClient.send(buffer,0,buffer.length,PORT,HOST);
socketClient.on('message',xulyDulieu);
function xulyDulieu(data,server)
{
     console.log('Nhan duoc tu server: '+ data);
}