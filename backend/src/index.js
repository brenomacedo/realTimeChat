const express = require('express')
const app = express()
const socket = require('socket.io')
const http = require('http')
const server = http.createServer(app)

const io = socket(server)
io.on('connection', socket => {
    socket.on('newMessage', msg => {
        socket.broadcast.emit('messageReceived', msg)
    })
    socket.on('newMessage', msg => {
        socket.emit('messageReceived', msg)
    })
})

server.listen(3003, () => {
    console.log('running!')
})