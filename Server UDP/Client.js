var HOST = '172.20.110.215';
var PORT = 12345;
var dgramLib = require('dgram');
var socketClient = dgramLib.createSocket('udp4');
var buffer = new Buffer('Xin chao server');
socketClient.send(buffer,0,buffer.length,PORT,HOST);
socketClient.on('message',xulyDulieu);

function xulyDulieu(data,server)
{
    console.log('Nhan duoc tu server: '+ data);
}