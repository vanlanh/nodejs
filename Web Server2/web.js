var host = '172.50.3.191';
var port = 8080;
var httpLib = require('http');
var fs = require('fs');
var httpServer = httpLib.createServer();
httpServer.listen(port,host);
httpServer.on('request',processRequest);
function processRequest(request,response)
{
    //console.log(request.url);
    //xac dinh ten file ma client goi yeu cau den
    var contentType = '';
    var fileName = '';
    fileName = request.url.toString();

    //lay ten file bo di ki tu '/' dau tien, neu yeu cau la '/' thi mo trang mac dinh la index.html
    fileName = (fileName.length>1) ? fileName : '/index.html';
    
    //xac dinh loai file ma client goi dien de phan hoi theo dung content type

    
    if (fileName.indexOf('.css')>=0)
    {
        //neu file yeu cau la file .css
        contentType = "text/css";
    }
    else if (fileName.indexOf('.js')>=0)
    {
        //neu file yeu cau la file .js (javascript)
        contentType = "text/javascript";
    }
    else if (fileName.indexOf('.png')>=0 || fileName.indexOf('.jpeg')>=0 || fileName.indexOf('.jpg')>=0 || fileName.indexOf('.gif')>=0 || fileName.indexOf('.bmp')>=0)
    {
        //neu file yeu cau la file anh png, jpg,bmp, gif, jpeg
        contentType = "text/img";
    }
    else 
    {
        //truong hop con lai thi mac dinh la file text/html
        contentType = "text/html";
    }

    //xac dinh duong dan tuyet doi den file yeu cau tu client, __dirname la duong dan den thu muc dang lam viec hien tai cua nodejs
    fileName = __dirname + fileName;
    console.log(fileName);
    
    // goi ham kiem tra xem file co ton tai khong
    fs.stat(fileName,
        //ham xu ly sau khi co' ket qua xac dinh file co ton tai hay ko
        function (err,fileStatus) //tham so thu nhat: chua thong tin ve loi~ neu file khong ton tai, thong so thu 2 chua thong tin ve file neu ton tai
        {
            //neu file ton tai thi err = null
            if (err == null)
            {
                //console.log(fileStatus);
                //goi phan hoi ve client noi dung theo dung content type ma client yeu cau
                response.writeHead(200,{'Content-Type':contentType});
                //doc noi dung file vao data
                var data = fs.readFileSync(fileName);

                //goi noi dung file da doc duoc ve client
                response.end(data);
            }
            else{ //file khong ton tai 
                console.log('file '+ fileName+'khong ton tai');

                //goi phan hoi ve client de biet file yeu cau la khong ton tai
                response.writeHead(500);
                response.end();
            }
        }
    );
    
}
