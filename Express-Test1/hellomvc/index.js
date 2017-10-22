var express = require("express")
var port = 3000
var app = express()
var db = require("./configuration")

app.listen(port, processListen)

app.set("view engine", "ejs")
app.use('/public', express.static(__dirname + '/public'))

function processListen(){
    console.log("Ứng dụng đang hoạt động tại: " + port)
}

app.get('/', processGetIndex)

function processGetIndex(req, res){
    res.render("index")
}

app.get('/home', processGetHome)

function processGetHome(req, res){
    res.render("home/home")
}

app.get('/home/account', processGetAccount)

function processGetAccount(req, res){
    res.render("home/account/account")
}

app.get('/home/account/user', processGetUser)

function processGetUser(req, res){
    res.render("home/account/user/user")
}