var http = require('http');

var server = http.createServer(function (req,res) {
  console.log("une page");

  console.log(req.url);
if (req.url=='/mapage') {
  var message="Ceci est un message";
}
  res.writeHead(200,{"Content-Type":"text/html"});
  res.write(`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
    <h1>Ceci est un titre</h1>
    <span>${req.url}</span>
    <p>${message}</p>
    </body>
  </html>`);

  res.end();

})
server.listen(8080)
