var express = require('express')
var port = 3000
var app = express()

app.listen(port, processListen)

app.set('view engine', 'ejs')
app.use('/public', express.static(__dirname + "/public"))

function processListen(){
    console.log("Ứng dụng đang hoạt động tại: " + port)
}

app.get('/', processGetIndex)

function processGetIndex(req, res){
    res.render("index")
}