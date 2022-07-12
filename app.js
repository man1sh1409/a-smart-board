const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port=process.env.PORT||5000;
app.use(express.static('public'));


 //let user=0;
io.on('connection', (socket) => {
    //user++;
  //console.log('user number',user);
  //received data 
  socket.on("beginPath",(data)=>{
    io.sockets.emit("beginPath",data);
  })
  socket.on("drawStroke",(data)=>{
    io.sockets.emit("drawStroke",data);
  })
  socket.on("redoUndo",(data)=>{
    io.sockets.emit("redoUndo",data);
  })
});

server.listen(port, () => {
  console.log('listening on *:'+port);
});