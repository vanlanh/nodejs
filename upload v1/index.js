var express = require('express');
var app = express();
var multer = require('multer');

app.listen(3000, function(){
    console.log('Connecting ...');
});

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './upload')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
});

var upload = multer({storage: storage});
app.post('/upload', upload.single("file"), function(req, res){
    console.log(req.file);
    res.send("UPLOAD FILE THÀNH CÔNG");
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/upload.html');
});