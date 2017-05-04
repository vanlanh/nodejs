var fsLib = require('fs');
var fileStream = fsLib.createReadStream('hostsout.txt', {encoding : 'utf8'});
// var fileParts = [];
// fileStream.on('data',processReadData);
// fileStream.on('end',processReadEnd);
// function processReadData(partdata){
//     fileParts.push(partdata);
// }
// function processReadEnd(){
//     var buffer = Buffer.concat(fileParts);
//     console.log(buffer.toString());
// }
function read(){
    var buf;
    while (buf=fileStream.read()){
        console.log('Doc tu file: '+buf);
    }
}
fileStream.on('readable', read);
fileStream.once('end', function(){
    console.log('Doc xong');
});
