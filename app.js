const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
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

server.listen(5500, () => {
  console.log('listening on *:5500');
});