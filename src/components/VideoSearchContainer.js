import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { YOUTUBE_VIDEO_SEARCH_API } from '../utils/constants'
import ShimmerCard from './ShimmerCard'
import VideoSearchResult from './VideoSearchResult'

const VideoSearchContainer = () => {
  const [videoSearchResults, setVideoSearchResults] = useState([])
  const [searchParams] = useSearchParams()
  const videoSearchQuery = searchParams.get("s")
  // console.log("videoSearchQuery", videoSearchQuery)


  useEffect(()=>{
    getVideoSearchQueryResults()
  }, [] )

  const getVideoSearchQueryResults = async() => {
    const data = await fetch(YOUTUBE_VIDEO_SEARCH_API.replace("[videoSearchQuery]", videoSearchQuery))
    const dataJson = await data.json()
    setVideoSearchResults(dataJson.items)
    console.log("video search results", dataJson.items)

  }

  if (videoSearchResults === undefined || videoSearchResults.length === 0){
    return (<ShimmerCard />)
  }
  console.log("tata", videoSearchResults)

  return (
    <div className='m-2 p-2'>
      {Object.keys(videoSearchResults).map((index)=><VideoSearchResult key={videoSearchResults[index]} videoResult={videoSearchResults[index]}/>)}
    </div>
  )
}

export default VideoSearchContainer