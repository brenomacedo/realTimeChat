import React from 'react'
import Messages from './Messages'
import AddMessage from './AddMessage'
import './Chat.css'

export default props => {
    return (
        <div className="chat">
            <Messages />
            <AddMessage />
        </div>
    )
}