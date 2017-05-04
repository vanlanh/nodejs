 var host = '172.50.32.222';
 var port = 12345;
 var netLib = require('net');
 var server = netLib.createServer();
 server.listen(port, host);

 function writeLog(content, format, callback){
     var stdin = process.stdin;
     var stdout = process.stdout;

     stdin.resume();
     stdout.write(content +': ');

     stdin.once('data', (data) => {
         data = data.toString().trim();

         if(format.test(data)){
             callback(data);
         }else{
             stdout.write('Wrong format: '+format+'\n');
             writeLog(question, format, callback);
         }
     });
 }

 server.on('listening', () => {
     console.log('Server bat dau lang nghe tai dia chi ip la: '+host+' cong la: '+port);
 });
 server.on('connection', (socket) => {
    console.log('Da ket noi Client\n');

    socket.on('data', (data) => {
        console.log('\nClient: '+data);
        writeLog('Message', /.+/, (message) => {
            console.log('Server: '+message);
            socket.write(message);
        });
    });

    writeLog('Message', /.+/, (message) => {
        console.log('Server: '+message);
        socket.write(message);
    });

    socket.on('Close', () => {
        console.log('Dong ket noi');
        socket.end();
    });

    socket.on('Error', (err) => {
        console.log(err.message);
    });
 });
 