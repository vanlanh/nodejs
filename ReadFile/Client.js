var host = '172.50.3.191';
var port = 12346;
var net = require('net');
var conn = net.createConnection(port, host);
var fileName = 'C:/fileserver/abc.txt';
console.log('Da ket noi toi server');
conn.write('Hello Server, gui cho Client file '+fileName);
conn.on('data', xuLyDaTa);
function xuLyDaTa(data){
    console.log('Server gui den ban: '+data);
    console.log('Da nhan file '+fileName);
}
conn.on('close', xuLyClose);
function xuLyClose(){
    console.log('Dong ket noi');
    conn.end();
}
conn.on('err', xuLyLoi);
function xuLyLoi(err){
    console.error('Loi ket noi: '+err.message+' co ma la: '+err.code);
}