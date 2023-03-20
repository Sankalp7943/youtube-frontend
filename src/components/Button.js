import React from 'react'

const Button = ({name}) => {
  return (
    <button className='px-3 m-2 p-1 bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 font-medium font-size-xs rounded-full'>{name}</button>
  )
}

export default Button