var host = '172.50.32.222';
var port = 12345;
var net = require('net');
var conn = net.createConnection(port, host);
console.log("da ket noi toi server");
conn.write('Hello Server');
conn.on('data', (data) => {
    console.log('\nServer: '+data);
    writeLog('Message', /.+/, (message) =>{
        console.log('Client: '+message);
        conn.write(message);
    });
});

function writeLog(content, format, callback){
    var stdin = process.stdin;
    var stdout = process.stdout;

    stdin.resume();
    stdout.write(content + ': ');

    stdin.once('data', (data) => {
        data = data.toString().trim();

        if(format.test(data)){
            callback(data);
        }
        else {
            stdout.write('Wrong format: '+format+'\n');
            writeLog(question, format, callback);
        }
    });
}

writeLog('Message', /.+/, (message) => {
    console.log('Client: ', message);
    conn.write(message);
});

conn.on('Close', () => {
    console.log('Dong ket noi');
    conn.destroy();
});

conn.on('error', (err) => {
    console.log('\nError: '+err);
});

