const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = 6969;

app.use(express.static(__dirname + '/public'));

// Store private rooms and their respective clients
const privateRooms = {};

io.on('connection', (socket) => {
    console.log('A user connected');

    // Join a private room
    socket.on('joinRoom', (room) => {
        socket.join(room);
        if (!privateRooms[room]) {
            privateRooms[room] = [socket.id];
        } else {
            privateRooms[room].push(socket.id);
        }
        console.log(`User joined room: ${room}`);
    });

    // Handle private messages
    socket.on('privateMessage', (data) => {
        console.log(data);
        const { room, message } = data;
        const clients = privateRooms[room];
        if (clients && clients.length > 0) {
            clients.forEach((clientId) => {
                if (clientId !== socket.id) {
                    io.to(clientId).emit('privateMessage', message);
                }
            });
        }
    });

    // Disconnect event
    socket.on('disconnect', () => {
        console.log('A user disconnected');
        // Remove the disconnected user from all private rooms
        for (const room in privateRooms) {
            const index = privateRooms[room].indexOf(socket.id);
            if (index !== -1) {
                privateRooms[room].splice(index, 1);
            }
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})