import React from 'react'
import { WEBSITE_URL } from '../utils/constants'

const VideoSearchResult = ({videoResult}) => {
  // const {snippet} = videoResult
  console.log("hello", videoResult)
  const openVideo = (videoId) =>{
    return window.open(WEBSITE_URL + "watch?v="+videoId,"_self")
  }

  return (
    <div className='m-2 p-5 bg-gray-200 flex w-[1200px] rounded-lg shadow-md' onClick={()=>openVideo(videoResult.id.videoId)}>
      <img className='rounded-lg' alt='video-thumbnail' src={videoResult.snippet.thumbnails.medium.url} />
      <div className='m-2 px-2'>
        <p className='m-2 font-medium text-xl'>{videoResult.snippet.title}</p>
        <p className='m-2 font-thin text-xl'>{videoResult.snippet.channelTitle}</p>
        <p className='m-2 font-thin'>{videoResult.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoSearchResult