var http = require('http');
var fs = require('fs');

var file = fs.createWriteStream("file.jpg");

http.createServer(function(request, response){
    
}).listen(8082);

