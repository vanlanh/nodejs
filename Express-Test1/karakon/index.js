var express = require("express")
var fs = require("fs")
var port = 3000
var app = express()

app.listen(port,processListen)

app.set("view engine", "ejs")
app.use('/public', express.static(__dirname + '/public'))

function processListen(){
    console.log("Web đang hoạt động tại cổng: " + port)
}

app.get("/", processGetIndex)

function processGetIndex(req, res){
    res.render("index")
}
