import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { YOUTUBE_VIDEO_SEARCH_API } from '../utils/constants'
import ShimmerCard from './ShimmerCard'

const VideoSearchContainer = () => {
  const [videoSearchResults, setVideoSearchResults] = useState([])
  const [searchParams] = useSearchParams()
  const videoSearchQuery = searchParams.get("s")
  // console.log("videoSearchQuery", videoSearchQuery)


  useEffect(()=>{
    const results = getVideoSearchQueryResults()
    setVideoSearchResults(results)
  }, searchParams)

  const getVideoSearchQueryResults = async() => {
    const data = await fetch(YOUTUBE_VIDEO_SEARCH_API.replace("[videoSearchQuery]", videoSearchQuery))
    const dataJson = await data.json()
    console.log("video search results", dataJson.items)
    return dataJson.items
  }

  if (videoSearchResults === undefined || videoSearchResults.length === 0){
    return (<ShimmerCard />)
  }


  return (
    <div className='m-2 p-2'>
      
    </div>
  )
}

export default VideoSearchContainer