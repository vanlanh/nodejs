function processInsert(req, res){
    var bodyContent = req.body;
    if(!bodyContent){
        res.render("error/400")
        return
    }
    console.log(bodyContent)
    var id = bodyContent.id
    var name = bodyContent.name
    var  email = bodyContent.email
    var dt = bodyContent.dt
    var content = bodyContent.content
    if(!id || !email || !dt || !content){
        res.render("error/400")
        return
    }
    var sql = "insert into sendform(name, email, dt, content) values(?, ?, ?, ?)"
    db.connect.query(sql, [name, email, dt, content], processInsertQuery)

    function processInsertQuery(error,result){
        if(error)throw error
        if(result){
            res.redirect("admin")
            return;
        }
    }
}
module.exports = new Config();