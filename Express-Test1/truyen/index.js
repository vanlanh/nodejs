var express = require('express')
var app = express()
var port = 3000
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/public', express.static(__dirname + '/public'))
app.set("view engine", "ejs")
app.set("views", "./view")
app.listen(port, processListen)

function processListen(){
    console.log("Đã kết nối đến port: " + port)
}

//Tạo kết nối đến database
var mysql = require('mysql')
var connection  = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'truyen',
    multipleStatements: true,
    charset: 'utf8_unicode_ci'
})

//Kết nối và kiểm tra kết nối
connection.connect(function(error){
    if(error){
        console.error("Error: " + error)
    }
    console.log("Database connection has been established successfully!")
})

//Duyệt trang index.ejs
app.get('/', function(req, res){
    connection.query('SELECT * FROM list_story', function (error, results, fields){
        if(error){
            console.error("Error: " + error)
        }
        res.render("index.ejs", {rs: results})
    })
})

//Duyệt trang Register
app.get('/register', function(req, res){
    res.render("register.ejs")
})

//Đăng ký Username
app.post('/register', urlencodedParser, function(req, res){
    var 
})

//Duyệt trang Login
app.get('/login', function(req, res){
    res.render("login.ejs")
})

//Duyệt trang manager.ejs
app.get('/manager', function(req, res){
    connection.query('SELECT * FROM list_story', function (error, results, fields){
        if(error){
            console.error("Error: " + error)
        }
        res.render("manager.ejs", {rs: results})
    })
})

//Duyệt trang add.ejs
app.get('/manager/add', function(req, res){
    res.render("add.ejs")
})

//Nhập thêm dữ liệu trang Insert
app.post('/manager/add', urlencodedParser, function(req, res){
    var id = req.body.txtID
    var name = req.body.txtName
    var name_link = req.body.txtNameLink
    var author = req.body.txtAuthor
    var content = req.body.txtContent

    connection.query("INSERT INTO list_story(ID, Name, Name_link, Author, Content) VALUES ('"+id+"', '"+name+"', '"+name_link+"', '"+author+"', '"+content+"')", function (error, results, fields){
        if(error){
            console.error("Error: " + error)
        }
        //Sau khi insert thì quay về trang manager
        res.redirect("../manager")
    })
})

//Duyệt trang update.ejs và trỏ đến đối tượng cần update
app.get('/manager/update/:name_link', function(req, res){
    var name = req.params.name_link

    connection.query("SELECT * FROM list_story WHERE Name_link='"+name+"'", function (error, results, fields){
        if(error){
            console.error("Error: " + error)
        }
        res.render("update.ejs", {rs: results[0]})
    })
})

//Chỉnh sửa dữ liệu
app.post('/manager/update', urlencodedParser, function(req, res){
    var name = req.body.txtName
    var name_link = req.body.txtNameLink
    var author = req.body.txtAuthor
    var id = req.body.txtID
    var content = req.body.txtContent

    connection.query("UPDATE list_story SET ID='"+id+"', Name='"+name+
        "', Name_link='"+name_link+"', Author='"+author+"', Content='"+content+"' WHERE ID='"+id+"'", 
        function (error, results, fields){
        if(error){
            console.error("Error: " + error)
        }
        //Sau khi update thì quay về trang manager
        res.redirect("../manager")
    })
})

//Xóa dữ liệu của 1 hàng với id tương ứng
app.get('/manager/delete/:id', function(req, res){
    var id = req.params.id

    connection.query("DELETE FROM list_story WHERE ID='"+id+"'", function(error, results, fields){
        if(error){
            console.error("Error: " + error)
        }
        //Sau khi delete thì quay về trang manager
        res.redirect("../../manager")
    })
})

//Duyệt trang READ.EJS
app.get('/doctruyen/:name_link', function(req, res){
    var name = req.params.name_link

    connection.query("SELECT * FROM list_story WHERE Name_link= '"+name+"'", function(error, results, fields){
        if(error){
            console.error("Error: " + error)
        }
        res.render("read.ejs", {rs: results[0]})
    })
})