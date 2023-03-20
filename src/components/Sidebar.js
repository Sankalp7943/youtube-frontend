import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  const isHomeOpen = useSelector(store => store.home.isHomeOpen)
  if (!isMenuOpen){
    return null
  }
  return (
    <div>
      <div className='w-54 bg-gray-200 p-4 m-2 rounded-lg shadow-lg font-medium'>
          <a href='/'>
            {isHomeOpen? <ul className='my-1 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-full '>Home</ul> : <ul className='my-1 px-4 py-2 hover:bg-gray-300 rounded-full'>Home</ul>}
          </a>
          <ul className='my-1 px-4 py-2 hover:bg-gray-300 rounded-full'>Subscriptions</ul>
          <ul className='my-1 px-4 py-2 hover:bg-gray-300 rounded-full'>Trending</ul>
          <ul className='my-1 px-4 py-2 hover:bg-gray-300 rounded-full'>Shorts</ul>
          <ul className='my-1 px-4 py-2 hover:bg-gray-300 rounded-full'>Liked Videos</ul>
          <ul className='my-1 px-4 py-2 hover:bg-gray-300 rounded-full'>Watch Later</ul>
          <br></br>
          <ul className='my-1 px-4 py-2 hover:bg-gray-300 rounded-full'>Music</ul>
          <ul className='my-1 px-4 py-2 hover:bg-gray-300 rounded-full'>Gaming</ul>
          <ul className='my-1 px-4 py-2 hover:bg-gray-300 rounded-full'>Sports</ul>
          <ul className='my-1 px-4 py-2 hover:bg-gray-300 rounded-full'>Movies</ul>
          <ul className='my-1 px-4 py-2 hover:bg-gray-300 rounded-full'>Health</ul>
          <ul className='my-1 px-4 py-2 hover:bg-gray-300 rounded-full'>News</ul>
          <ul className='my-1 px-4 py-2 hover:bg-gray-300 rounded-full'>Shopping</ul>
          <ul className='my-1 px-4 py-2 hover:bg-gray-300 rounded-full'>Art</ul>
      </div>
    </div>
  )
}

export default Sidebar