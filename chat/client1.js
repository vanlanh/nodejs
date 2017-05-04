 var host = "172.50.23.76";
var port = 8081;
 var netModule = require('net');
 //Create a connection that uses connect to Server and assign to 'conn' variable

var conn = netModule.createConnection(port, host);
 //Data receiving events

conn.on('data', (data) => {
         console.log("\nServer: " + data);
         writeLog("Message", /.+/, (message) => {
         console.log("Client: " + message);
         conn.write(message);
     }); 
 });
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
 //Call and execute write stream function

writeLog("Message", /.+/, (message) => {
    console.log("Client:", message);
     conn.write(message);
 });
 //Errors on connect

conn.on('error', (err) => {
     console.log('\nError: '+ err);
});