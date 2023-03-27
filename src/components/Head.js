import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { WEBSITE_URL, YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'

const Head = () => {
  const searchCache = useSelector((store)=>store.search)
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const dispatch = useDispatch()
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  useEffect(()=>{
    const timer = setTimeout(()=>
    { if (searchCache[searchQuery])
      {
        console.log("If")
        setSuggestions(searchCache[searchQuery])
      }
      else
      {
        console.log("Inside else")
        getSearchSuggestions()
      }
      
    }, 500)

    return ()=>clearTimeout(timer)
  }, [searchQuery])

  const getSearchSuggestions = async() => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    console.log(data)
    const json = await data.json()
    setSuggestions(json[1])
    dispatch(
      cacheResults(
        {[searchQuery]: json[1],}
      )
    )
  }

  const openSuggestion = (suggestion) => {
    return window.open(WEBSITE_URL + "search?s="+suggestion,"_self")
  }

  return (
    <div className='grid grid-flow-col p-4 px-5 shadow-lg bg-gray-200 sticky top-0'>
        <div className='flex col-span-1'>
            <img onClick={()=>toggleMenuHandler()} className='cursor-pointer h-8 hover:bg-gray-300 border rounded-full' alt='menu-icon' src='https://cdn-icons-png.flaticon.com/512/7216/7216128.png'></img>
            <a href="/">
              <img className='h-8 p-1 mx-5 hover:shadow-lg hover:shadow-red-500/50 hover:bg-red-500/50 rounded-lg' alt='youtube-logo' src='https://icon-library.com/images/youtube-logo-icon-png/youtube-logo-icon-png-25.jpg'></img>
            </a>
        </div>
        <div className='col-span-10'>
          <div>
            <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type="text" className='align-middle h-8 border border-gray-400 rounded-l-full px-6 w-1/2 bg-gray-100 focus:outline-none focus:bg-gray-300 focus:border-gray-500 hover:border-1'></input>
            <button type="submit" className='align-middle h-8 border border-gray-400 rounded-r-full px-4 hover:border-1 hover:bg-gray-300 focus:bg-gray-400'>&#128269;</button>
          </div>
          <div className='fixed bg-gray-100 w-1/3 shadow-md rounded-lg mx-2 border border-gray-200' >
            <ul>
              {suggestions.map(s=><li key={s} onClick={()=>openSuggestion(s)} className='hover:bg-gray-300 px-2 rounded-lg hover:shadow-lg m-1'>{s}</li>)}
            </ul>
          </div>
        </div>
        <div className='flex col-span-1'>
            <img className='h-8 mx-2 px-2' alt='user-icon' src='https://cdn-icons-png.flaticon.com/512/666/666201.png'></img>
        </div>

    </div>
  )
}

export default Head