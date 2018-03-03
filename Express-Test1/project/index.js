var express = require("express")
var bodyparser = require("body-parser");

var port = 3000
var app = express()
var db = require('./configuration')


app.listen(port, processlisten)

app.set("view engine", "ejs")
app.use('/public', express.static(__dirname + '/public'))

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));


function processlisten(){
    console.log("Application is running at port: " + port)
}

app.get('/', processGetIndex)
app.get('/admin', processGetAdmin)

//crud service
app.post('/insert', processInsert)
app.post('/update', processUpdate)
app.post('/delete', processDetlete)

//admin
function processGetAdmin(req, res){
    var sql = "SELECT *FROM content"

    db.connect.query(sql, processQuery)
    function processQuery(err, results){
        if(err)throw err
        res.render('admin/admin.ejs', {rs: results})
    }
}

// function processGetAdmin(req, res){
//     var sql = "SELECT *FROM customer";

//     db.connect.query(sql, processQuery)
//     function processQuery(err, results){
//         if(err)throw err
//         res.render('admin/admin.ejs', {rs: results})
//     }
// }
//home indexejs
function processGetIndex(req, res){
    var sql = "SELECT *FROM content";

    db.connect.query(sql, processQuery)
    function processQuery(err, results){
        if(err)throw err
        res.render('index.ejs', {rs: results})
    }
}

//cac ham xu ly
function processInsert(req, res){
    var bodyContent = req.body;
    if(!bodyContent){
        res.render("error/400")
        return
    }
    console.log(bodyContent)
    var images = bodyContent.images
    var title = bodyContent.title
    var acre = bodyContent.acre
    var price = bodyContent.price
    var dest = bodyContent.dest
    var location = bodyContent.location
    var phone = bodyContent.phone
    if(!images || !title || !acre || !price || !dest || !location || !phone){
        res.render("error/400")
        return
    }
    var sql = "insert into content(images, title, acre, price, dest, location, phone) values(?, ?, ?, ?, ?, ?, ?)"
    db.connect.query(sql, [images, title, acre, price, dest, location, phone], processInsertQuery)

    function processInsertQuery(error,result){
        if(error)throw error
        if(result){
            res.redirect("/admin")
            return;
        }
    }
}

//proccessupdate
function processUpdate(req, res){
    console.log(JSON.stringify(req.body))
    var bodyContent = req.body
    if(!bodyContent){
        res.render("error/400")
        return;
    } 
    var id = bodyContent.userId
    var images = bodyContent.images
    var title = bodyContent.title
    var acre = bodyContent.acre
    var price = bodyContent.price
    var dest = bodyContent.dest
    var location = bodyContent.location
    var phone = bodyContent.phone

    if(!images || !title || !acre || !price || !dest || !location || !phone){
        res.render("error/400")
        return
    }
    var sql = "update content set images = ?, title = ?, acre = ?, price = ?, dest = ?, location = ?, phone = ? where id = ?"
    db.connect.query(sql, [images, title, acre, price, dest, location, phone, id],processUpdateQueryResult)
    function processUpdateQueryResult(err, result){
        if(err){
            throw err;
            res.render("error/500")
        }
        if(result){
            res.redirect("/admin")
        }
    }
}
//process delete
function processDetlete(req,res){
    var bodyContent = req.body

    if(!bodyContent) return res.render("")

    var raw = bodyContent.userId

    var userId = parseInt(raw)

    if(!userId || userId === 0)
    res.status(500).send({
        message:"tham số không hợp lệ"
    })

    var sql = "delete from content where id = ?"

    db.connect.query(sql, userId, function (error, result){
        if(error){
            throw error;
            res.render('error/500')
        }else{
            res.redirect('admin')
        }
    })
}
function procesReload(req,res){
    var sql = "SELECT * FROM content"
    db.connect.query(sql, processQuery)

    function processQuery(err, result){
        if(err){
            throw err
            res.status(500).send({
                message: "lối lấy thông tin"
            })
        }else{
            res.json({
                result: result
            })
        }
    }
}
app.get('/reload', procesReload)