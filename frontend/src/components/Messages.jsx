import React, { useState } from 'react'
import Message from './Message'
import './Messages.css'


export default props => {
    
    const socket = props.socket
    const [messages, setMessages] = useState([])

    socket.on('messageReceived', msg => {
        
        setMessages([...messages, msg])
        
    })

    const renderRows = () => {
        return messages.map((item, index) => (
            <Message key={index} {...item} />
        ))
    }

    return (
        <div className='messages-box'>
            {renderRows()}
        </div>
    )
}