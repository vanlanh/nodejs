 var host = '172.110.43.46';
 var port = 12345;
 var net = require('net');
 var fsLib = require('fs');
 var conn = net.createConnection(port, host);
 var fileName = 'C:/fileserver/ab.txt';
 console.log('da ket noi toi server');
 conn.write('Hello Server, xin kiểm tra file '+fileName+' cho Client');
 conn.on('data', processData);
 conn.on('close',processClose);
 function processData(data) 
 {
     console.log('Server gui den ban:   ' +data);
     console.log('Đã nhận');
 }
 conn.on('error', processError);
 function processError(err)
 {
     console.error('Loi ket noi:' + err.message +', code: ' + err.code);
 }
 function processClose()
 {
     console.log('Dong ket noi');
     conn.end();
}
