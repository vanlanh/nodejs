var express = require("express")
var port = 3000
var app = express()

app.listen(port, processListen)

app.set("view engine", "ejs")
app.use('/public', express.static(__dirname + '/public'))

function processListen() {
    console.log("Ung dung dang hoat dong tai: " + port)
}

app.get('/', processGetIndex)
//app.get('/about', processGetAbout)
app.get('/home', processGetHome)


function processGetIndex(req, res) {
    res.render("index.ejs")
}

function processGetHome(req, res) {
    res.render("home/home.ejs")
}

