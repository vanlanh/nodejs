var express = require("express")
var bodyparser = require("body-parser");

var port = 3000
var app = express()
var db = require('./configuration')



app.listen(port, processListen)

app.set("view engine", "ejs")
app.use('/public', express.static(__dirname + '/public'))

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


function processListen() {
    console.log("Application is running at port: " + port)
}

app.get('/', processGetIndex)
app.get('/home', processGetHome)

//CRUD services
app.post('/insert', processInsert)
app.post('/update', processUpdate)
app.post('/delete', processDelete)


function processGetIndex(req, res) {
    res.render("index.ejs")
}

function processGetHome(req, res) {
    var sql = "SELECT * FROM usertbl";

    db.connect.query(sql, processQuery)

    function processQuery(err, results) {
        if(err) throw err
        res.render('home/home.ejs', {rs: results})
    }
}


function processInsert(req, res) {
    var bodyContent = req.body;
    if(!bodyContent) {
        res.render("error/400")
        return 
    } 
    console.log(bodyContent)
    var lastname = bodyContent.lastname
    var firstname = bodyContent.firstname
    var birthday = bodyContent.birthday
    var gender = bodyContent.gender

    if(!lastname || !firstname || !birthday) {
        res.render("error/400")
        return
    } 

    var sql = "insert into usertbl(lastname, firstname, birthday, gender) values(?, ?, ?, ?)"
    db.connect.query(sql, [lastname, firstname, birthday, gender], proccessInsertQuery)

    function proccessInsertQuery(error, result) {
        if(error) throw error
        if(result) {
            res.redirect("/home")
            return;
        }
    }
}

function processUpdate(req, res) {
    console.log(JSON.stringify(req.body))
    var bodyContent = req.body
    if(!bodyContent) {
        res.render("error/400")
        return;
    }

    var id = bodyContent.userId
    var lastname = bodyContent.lastname
    var firstname = bodyContent.firstname
    var birthday = bodyContent.birthday
    var gender = bodyContent.gender

    if(!lastname || !firstname || !birthday || !gender) {
        res.render("error/400")
        return
    } 

    var sql = "update usertbl set lastname = ?, firstname = ?, birthday = ?, gender = ? where id = ?"

    db.connect.query(sql, [lastname, firstname, birthday, gender, id], processUpdateQueryResult)

    function processUpdateQueryResult(err, result) {
        if(err) {
            throw err;
            res.render("error/500")
        }
        if(result) {
            res.redirect("/home")
        }
    }
}

function processDelete(req, res) {
    var bodyContent = req.body
    
    if(!bodyContent) return res.render("")

    var raw = bodyContent.userId

    var userId = parseInt(raw)

    if(!userId || userId === 0) 
        res.status(500).send({
            message: "Tham số không hợp lệ"
        })

    
    var sql = "delete from usertbl where id = ?"

    db.connect.query(sql, userId, function(error, result) {
        if(error) {
            throw error;
            res.render('error/500')
        } else {
            res.redirect('/home')
        }
    })

}

function processReload(req, res) {
    var sql = "SELECT * FROM usertbl"
    
    db.connect.query(sql, processQuery)

    function processQuery(err, result) {
        if(err) {
            throw err
            res.status(500).send({
                message: "Lỗi lấy danh sách người dùng"
            })
        } else {
            res.json({
                result: result
            })
        }
    }
}

app.get('/reload', processReload)