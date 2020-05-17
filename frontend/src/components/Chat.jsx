import React from 'react'
import Messages from './Messages'
import AddMessage from './AddMessage'
import io from 'socket.io-client'
import './Chat.css'

export default props => {

    const socket = io('http://localhost:3003')

    return (
        <div className="chat">
            <Messages socket={socket} />
            <AddMessage socket={socket} />
        </div>
    )
}