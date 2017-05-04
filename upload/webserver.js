	//  var host = '127.0.2.1';
	//  var port = 8000;
	 var httpLib = require('http');
	 var httpServer = httpLib.createServer();
	//  httpServer.listen(port,host);
	 httpServer.on('request', function processRequest(request,response)
	 {	 
	    response.write('<html><head><style> type="text/css" * {	margin: 0 ;	padding: 0;}a{	text-decoration: none;	color: #fff;	font-weight: bold;}#header{	width:100%;	margin: 0 auto;	overflow: hidden;background: #2E2EFE;}.header_1{width: 1200px;margin: 0 auto;	overflow: hidden;}.header_1 .menu .header_ul{	width: 700px;	margin: 0 auto;	overflow: hidden;}.header_1 .menu .header_ul li{    display: inline-block;    margin: 11px 25px;    border-radius: 50px; padding: 6px;}.header_1 .menu .header_ul li:hover{border: 1px solid #ffffff;background: #ffffff;box-sizing: border-box;}.header_1 .menu .header_ul li:hover a{	color: #2ecc71;}.menu_1 {margin: 0 auto;	overflow: hidden;}.menu_1:hover a{	color: #DF0101;}.menu_1 .right{	text-align: center;}.menu_1 .right h1{	text-align: center;} .menu_1 .right ul{	list-style-type: none;}.menu_1 li:hover{	border: 1px olid #ffffff;	background: #ffffff;	box-sizing: border-box;}    <title>bai tap web loat</title>    <link rel="stylesheet" type="text/css" href="css/bt8.css"></style> </head><body>    <div id="header"> <div class="header_1"><div class="menu">    <ul class="header_ul"> <li><a href="">Menu</a></li><li><a href="">Login</a></li>  <li><a href="">Register</a></li> <li><a href="">Blog</a></li> <li><a href="">Support</a></li> <li><a href="">Introduce</a></li> </ul></div><div class="menu_1">  <div class="right">  <h1>UPLOAD FILE</h1> <form><input type="file" name="upload" accept="image/*"/> <button type="submit">UPLOAD</button> </from> <ul> <li><a href="">dowload img</a></li>  <li><a href="">dowload file video</a></li>  <li><a href="">dowload file</a></li> </ul> </div> </div></div></div></body></html>'); 
		response.end();
	}).listen(8000);
	 
