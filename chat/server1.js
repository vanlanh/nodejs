var host = "172.50.23.76";
 var port = 8081;
 var netModule = require('net');
 //Create server within host address and port

var server = netModule.createServer();
 //Server start listening on address and port were bound

server.listen(port, host);
//this functions allows users input some data from keyboard and showing it on their screen

function writeLog(content, format, callback) {
     var stdin = process.stdin;
     var stdout = process.stdout;
     //resume() function will allows ReadStream emit 'data' (from user keyboar input).

    stdin.resume(); 
     stdout.write(content + ": ");
     //Event occurs when user hit 'Enter'

    stdin.once('data', (data) => {
         data = data.toString().trim();
         //Check a format entered if wrong => throw it or right => execute callback handle

        if (format.test(data)) {
             callback(data);
         } 
         else {
             stdout.write("Wrong format : " + format + "\n");
             writeLog(question, format, callback);
         }
     });
 }
 //Listening event

server.on('listening', () => {
     console.log("Server is signing on: " + host + ":" + port);
 });
 //Event occured while incoming connection

server.on('connection', (socket) => {
     console.log('Client is online\n');
     
     //Server received data from client connected

    socket.on('data',(data) => {
         console.log("\nClient: " + data);
         writeLog("Message", /.+/, (message) => {
         console.log("Server:", message);
         socket.write(message);
        });
    });
     writeLog("Message", /.+/, (message) => {
         console.log("Server:", message);
         socket.write(message);
     });
     //Close connection

    socket.on('close', () => {
         console.log("Connection has been lost!");
         socket.destroy();
     });
     //Error occured when transfer data packets

    socket.on('error', (err) => {
         console.log(err.message);
	});
});
