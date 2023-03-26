import React from 'react'

const ChatMessage = ({ name, message}) => {
  return (
    <div className='flex items-center bg-gray-300 rounded-lg shadow-md my-2'>
        <img className='h-8 m-1 p-1' alt='user-icon' src='https://cdn-icons-png.flaticon.com/512/666/666201.png'></img>
        <span className='px-2 font-medium'>{name}:</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage