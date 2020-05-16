const express = require('express')
const app = express()
const socket = require('socket.io')
const http = require('http')
const server = http.createServer(app)

const io = socket(server)
io.on('connection', socket => {

})

server.listen(3333, () => {
    console.log('running!')
})