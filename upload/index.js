//khai báo biến express để chứa thư viện express
var express    = require('express');
var bodyParser = require('body-parser')
var app        = express();
var fs         = require('fs');
var server     = require('http').createServer(app);
var multipart  = require('connect-multiparty');
var multipartM = multipart();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/upload.html');
});

app.use(bodyParser.urlencoded({
    extended: true
}));

// Thư mục chứa ảnh upload trên server
app.use('/pictures', express.static(__dirname + '/upload'));




// Lắng nghe khi có requrest POST
app.post('/upload', multipartM, function(req, res, next) {

    var file = req.files.file;

    // Tên file
    var oFilename = file.name;

    // File type
    var fileType         = file.type.split('/')[1];

    // File size
    var fileSize         = file.size;

    // Đường dẫn lưu ảnh
    var pathUpload       = __dirname + '/upload/' + oFilename;

    // Đọc nội dung file tmp
    // nếu không có lỗi thì ghi file vào ổ cứng
    fs.readFile(file.path, function(err, data) {
        if(!err) {
            fs.writeFile(pathUpload, data, function() {

                // Return anh vua upload
                res.send('<img src="/pictures/' + oFilename +'" />');
                return;
            });

        }
    });
});

server.listen(3000);
console.log('Server runing port 3000');

/* Nguồn: http://fsd14.com/post/74-upload-file-trong-nodejs */