const http = require('http');
const socketIo = require('socket.io');
const app = require('./app');
const { PORT } = require('./config');

// Create HTTP server and Socket.IO instance
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

// Attach Socket.IO to request object for use in controllers
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Handle new client connections
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
});

// Start HTTP + WebSocket server
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));