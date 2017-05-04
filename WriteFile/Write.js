var fsLib = require('fs');
var fileStream = fsLib.createWriteStream('C://temp/test1.txt');
fileStream.write('Trần Văn Lanh\n');
var buf = new Buffer('\nHello Văn Lanh\n');
fileStream.write(buf);
console.log('Đã ghi xong');
fileStream.close;