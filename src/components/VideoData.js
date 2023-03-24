import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_INFO_API } from '../utils/constants'

const VideoData = ({info}) => {
  const [videoTitle, setVideoTitle]= useState("")
  const [channelName, setChannelName]= useState("")
  const [videoDescription, seVideoDescription]= useState("")


  useEffect(()=>{
    getVideoData()
  },)

  const getVideoData = async() => {
    const data = await fetch(YOUTUBE_VIDEO_INFO_API.replace("[videoID]", info))
    // console.log(YOUTUBE_VIDEO_INFO_API.replace("[videoID]", info))
    const json = await data.json()
    const videoInfo = json.items[0].snippet

    setVideoTitle(videoInfo.title)
    setChannelName(videoInfo.channelTitle)
    seVideoDescription(videoInfo.description)
    // console.log(json.items[0].snippet)
  }

  return (
    <div className='bg-gray-200 mx-10 p-10 shadow-lg rounded-lg w-3/5'>
      <h2 className='my-2 font-bold text-2xl' >{videoTitle}</h2>
      <h3 className='my-2 font-medium text-xl'>{channelName}</h3>
      <h3 className='my-2 font-regular text-l'>{videoDescription}</h3>
    </div>
  )
}

export default VideoData