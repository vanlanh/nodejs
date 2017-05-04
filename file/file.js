var fsLib = require('fs');
var file = fsLib.readFile('E:/dulieu.txt',processData);
function processData(err,data){
    if(err){
        console.log('Lỗi xảy ra trong quá trình đọc file');
    }else{
        console.log('Đã đọc thành công');
        console.log(data.toString());
    }
}