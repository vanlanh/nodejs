var mysql = require("mysql")

var connectionString = {
    host: 'localhost',
    user: 'root',
    password:'',
    database: "phong_tro",
    multipleStatements: true,
    charset: 'utf8_unicode_ci',
}
function Config(){
    this.connect = mysql.createConnection(connectionString)
    console.log("connecting to database......")
    this.connect.connect(processConnect)

    function processConnect(error){
        if(error){
            console.error("error connecting to my sql database: " + error.stack);
            return;

        }
        console.log("database connection has been established successfully!")

    }
}
module.exports = new Config();