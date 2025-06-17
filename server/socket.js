const http = require('http');
const socketIo = require('socket.io');
const app = require('./app');
const config = require('./config');
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });
app.use((req, res, next) => { req.io = io; next(); });
io.on('connection', (socket) => { console.log('client connected'); });
server.listen(config.PORT, () => console.log(`Server on ${config.PORT}`));