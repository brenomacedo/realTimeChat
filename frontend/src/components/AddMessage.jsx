import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './AddMessage.css'

export default props => {

    const socket = props.socket
    const [message, setMessage] = useState('')
    const location = useLocation()
    const name = location.state.name


    const handleSubmit = () => {
        if(message === ''){
            return
        }

        socket.emit('newMessage', { name, description: message })
        setMessage('')
    }

    return (
        <div className='addMessage'>
            <textarea value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    )
}