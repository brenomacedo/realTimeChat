import React from 'react'

export default props => {
    return (
        <div className='message'>
            <div className='author'>{props.name}</div>
            <div className='description'>{props.description}</div>
        </div>
    )
}