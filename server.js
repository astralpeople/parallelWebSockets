/**
 * Created by Ilya on 10.06.2015.
 */




var http = require('http');
var Static = require('node-static');
var WebSocketParallel = new require('ws');

// handling all connected clients in a array
var clients = {};

// Web ws server using port # 8081
var webSocketServer = new WebSocketParallel.Server({port: 8081});
webSocketServer.on('connection', function(ws) {

  var id = Math.random();
  clients[id] = ws;
  console.log("new message " + id);

  ws.on('message', function(message) {
    console.log('a new message received ' + message);

    for(var key in clients) {
      clients[key].send(message);
    }
  });

  ws.on('close', function() {
    console.log('your connection is closed ' + id);
    delete clients[id];
  });

});


// a very basic server using port 8080
var fileServer = new Static.Server('.');
http.createServer(function (req, res) {
  
  fileServer.serve(req, res);

}).listen(8080);

console.log("Congrats! Your server is running on ports 8080 and 8081. Take a cookie!");

