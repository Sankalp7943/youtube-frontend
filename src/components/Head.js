import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'


const Head = () => {
  const dispatch = useDispatch()
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className='grid grid-flow-col p-4 px-5 shadow-lg bg-gray-200 sticky top-0'>
        <div className='flex col-span-1'>
            <img onClick={()=>toggleMenuHandler()} className='cursor-pointer h-8 hover:bg-gray-300 border rounded-full' alt='menu-icon' src='https://cdn-icons-png.flaticon.com/512/7216/7216128.png'></img>
            <a href="/">
              <img className='h-8 mx-5 border hover:shadow-lg' alt='youtube-logo' src='https://icon-library.com/images/youtube-logo-icon-png/youtube-logo-icon-png-25.jpg'></img>
            </a>
        </div>
        <div className='col-span-10'>
            <input type="text" className='align-middle h-8 border border-gray-400 rounded-l-full px-4 w-1/2 bg-gray-100 focus:outline-none focus:bg-gray-300 focus:border-gray-500 hover:border-1'></input>
            <button type="submit" className='align-middle h-8 border border-gray-400 rounded-r-full px-4 hover:border-1 hover:bg-gray-300 focus:bg-gray-400'>&#128269;</button>
        </div>
        <div className='flex col-span-1'>
            <img className='h-8 mx-2 px-2' alt='user-icon' src='https://cdn-icons-png.flaticon.com/512/666/666201.png'></img>
        </div>

    </div>
  )
}

export default Head