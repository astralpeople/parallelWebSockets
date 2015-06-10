/**
 * Created by Ilya on 10.06.2015.
 */


if (!window.WebSocket) {
	document.body.innerHTML = 'Sorry! WebSockets are not supported in your browser';
}

// creating 7 active web sockets
var ws = new WebSocket("ws://localhost:8081");
var ws2 = new WebSocket("ws://localhost:8081");
var ws3 = new WebSocket("ws://localhost:8081");
var ws4 = new WebSocket("ws://localhost:8081");
var ws5 = new WebSocket("ws://localhost:8081");
var ws6 = new WebSocket("ws://localhost:8081");
var ws7 = new WebSocket("ws://localhost:8081");


// sending msgs from the html form
document.forms.publish.onsubmit = function() {
  var outgoingMessage = this.message.value;

  ws.send(outgoingMessage);
  ws2.send(outgoingMessage);
  ws3.send(outgoingMessage);
  ws4.send(outgoingMessage);
  ws5.send(outgoingMessage);
  ws6.send(outgoingMessage);
  ws7.send(outgoingMessage);

  return false;
};

// handling incoming msgs
ws.onmessage = function(event) {
  var secretMessage = event.data;
  alienMessage(secretMessage);
};
ws2.onmessage = function(event) {
  var incomingMessage = event.data;
  alienMessage(incomingMessage);
};

ws3.onmessage = function(event) {
  var secretMessage = event.data;
  alienMessage(secretMessage);
};

ws4.onmessage = function(event) {
  var secretMessage = event.data;
  alienMessage(secretMessage);
};

ws5.onmessage = function(event) {
  var secretMessage = event.data;
  alienMessage(secretMessage);
};

ws6.onmessage = function(event) {
  var secretMessage = event.data;
  alienMessage(secretMessage);
};

ws7.onmessage = function(event) {
  var secretMessage = event.data;
  alienMessage(secretMessage);
};

// showing messages
function alienMessage(message) {
  var messageUFO = document.createElement('div');
  messageUFO.appendChild(document.createTextNode(message));
  document.getElementById('subscribe').appendChild(messageUFO);
}
