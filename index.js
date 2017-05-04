import express from "express";
import http from 'http';
import SocketIO from 'socket.io';

let app = express();
let server = http.Server(app);
let io = new SocketIO(server);
let port = process.env.PORT || 3000;
let users = [];
let sockets = {};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/chat.html');
})

io.on('connection', (socket) => {
  	console.log('a user connected');

	  	socket.on('chat message', function(msg){
			console.log('message: ' + msg);
		});

		socket.on('disconnect', function(){
			console.log('user disconnected');
		});
});




///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
server.listen(port, () => {
  console.log('Example app listening on port 3000!')
})