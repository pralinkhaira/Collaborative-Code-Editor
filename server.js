const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const ShareDB = require('sharedb');
const WebSocketJSONStream = require('websocket-json-stream');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const shareDBConnection = new ShareDB();

// Create a new ShareDB connection
const connection = shareDBConnection.connect();

// Create a new document
const document = connection.get('documents', 'my-document');
document.fetch(err => {
    if (err) throw err;
    if (document.type === null) {
        document.create({ code: '' });
    }
});

// ShareDB WebSocket middleware
io.use((socket, next) => {
    const stream = new WebSocketJSONStream(socket);
    shareDBConnection.listen(stream);
    next();
});

// Serve static files
app.use(express.static('public'));

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
