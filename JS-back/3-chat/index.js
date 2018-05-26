var express=require('express');
var app=express();

var http=require('http').Server(app);
var io=require('socket.io')(http);

app.get('/',function (req,res) {
  res.sendFile(__dirname+'/index.html');
})


io.on('connection',function (socket) {
  console.log('Socket connecté');
  socket.on('messageChat',function (data) {
    console.log(data);
    io.emit('sendMessage',data);
  })
  socket.on('disconnect',function () {
    console.log('déconnected');
  })
})


http.listen(8080);
