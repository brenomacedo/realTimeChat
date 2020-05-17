import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'

export default props => {

    const [name, setName] = useState('')
    const history = useHistory()
    const handleLogin = () => {
        if(name === '') {
            return
        }

        history.push('/chat', { name })
    }

    return (
        <div className='login'>
            <input value={name} placeholder='What is your name?' onChange={e => setName(e.target.value)} />
            <button onClick={handleLogin}>GO!</button>
        </div>
    )
}