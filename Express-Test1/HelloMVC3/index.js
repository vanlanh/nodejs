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
app.put('/update', processUpdate)
app.delete('/delete', processDelete)


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
    var bodyContent = res.body
    if(!bodyContent) {
        res.render("error/400")
        return;
    }

    var id = bodyContent.userId
    var lastname = bodyContent.lastname
    var firstname = bodyContent.firstname
    var birthday = bodyContent.birthday

    if(!lastname || !firstname || !birthday) {
        res.render("error/400")
        return
    } 

    var sql = "update usertbl set lastname = ?, firstname = ?, birthday = ? where id = ?"

    db.connect.query(sql, [lastname, firstname, birthday, userId], processUpdateQueryResult)

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
    var bodyContent = res.body
    
    if(!bodyContent) return res.render("")

    var userId = bodyContent.userId

    if(!userId) return res.render("error/400")


    var sql = "delete usertbl where id = ?"

    db.connect.query(sql, userId, function(error, result) {
        if(error) {
            throw error;
            res.render("error/500")
        } else {
            res.redirect("/home")
        }
    })

}