var http=require('http'),  
    https = require('https'),
    express = require('express'),
     fs = require('fs'),
    path = require('path');
/* 
var options = {  
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}; */

function startLoadFile(){ $.ajax({ url: 'images.json', type: 'GET', dataType : 'json', success : function (data) { createImages(data) } }); }

var port1 = 8080;  
var port2 = 443;

var app = express();  
//app.use(express.urlencoded());
app.use(express.urlencoded({extended: true})); 
app.use(express.json());   
app.use(express.static(path.join(__dirname, '/public'))); // 정적 리소스 미들웨어


http.createServer(app).listen(port1, function(){  
  console.log("Http server listening on port " + port1);
});


/*  https.createServer(options, app).listen(port2, function(){  
   console.log("Https server listening on port " + port2);
 }); */


app.get('/img', function (req, res) {  
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<img src="/img/kkangi.png">');
    
    res.end();
});

app.get('/', function (req, res){  
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<img src="/imgs/img1.jpg">');
    res.write('<img src="/imgs/img2.jpg">');
    res.write('<img src="/imgs/img3.jpg">');
    res.write('<img src="/imgs/img4.jpg">');
    res.write('<img src="/imgs/img5.jpg">');
    
    res.end();
})

