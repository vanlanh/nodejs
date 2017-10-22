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
    if(error) throw error
    console.log("Database connection has been established successfully!")
})

//Duyệt trang index.ejs
app.get('/', function(req, res){
    connection.query('SELECT * FROM list_story', function (error, results, fields){
        if(error) throw error
        res.render("index.ejs", {rs: results})
    })
})

//Duyệt trang manager.ejs
app.get('/manager', function(req, res){
    connection.query('SELECT * FROM list_story', function (error, results, fields){
        if(error) throw error
        res.render("manager.ejs", {rs: results})
    })
})

//Duyệt trang add.ejs
app.get('/manager/add', function(req, res){
    res.render("add.ejs")
})

//Nhập thêm dữ liệu
app.post('/manager/add', urlencodedParser, function(req, res){
    var name = req.body.txtName
    var author = req.body.txtAuthor

    connection.query("INSERT INTO `list_story`(`ID`, `Name`, `Author`) VALUES (NULL, '"+name+"', '"+author+"')", function (error, results, fields){
        if(error) throw error
        //Sau khi insert thì quay về trang manager
        res.redirect("../manager")
    })
})

//Duyệt trang update.ejs và trỏ đến đối tượng cần update
app.get('/manager/update/:id', function(req, res){
    var id = req.params.id

    connection.query("SELECT * FROM list_story WHERE ID='"+id+"'", function (error, results, fields){
        if(error) throw error
        res.render("update.ejs", {rs: results[0]})
    })
})

//Chỉnh sửa dữ liệu
app.post('/manager/update', urlencodedParser, function(req, res){
    var name = req.body.txtName
    var author = req.body.txtAuthor
    var id = req.body.txtID

    connection.query("UPDATE list_story SET Name='"+name+"', Author='"+author+"' WHERE ID='"+id+"'", function (error, results, fields){
        if(error) throw error
        //Sau khi update thì quay về trang manager
        res.redirect("../manager")
    })
})

//Xóa dữ liệu của 1 hàng với id tương ứng
app.get('/manager/delete/:id', function(req, res){
    var id = req.params.id

    connection.query("DELETE FROM list_story WHERE ID='"+id+"'", function (error, results, fields){
        if(error) throw error
        //Sau khi delete thì quay về trang manager
        res.redirect("../../manager")
    })
})
