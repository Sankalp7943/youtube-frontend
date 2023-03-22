import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard'
import ShimmerCard from './ShimmerCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideos()
  }, [])
  const getVideos = async ()=>{
    const videosData = await fetch(YOUTUBE_VIDEOS_API)
    const videosDataJson = await videosData.json()
    setVideos(videosDataJson.items)
  }
  if (videos.length==0){
    return (
      <ShimmerCard />
    )
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map(video => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video}/>
        </Link>))
      }
    </div>
  )
}

export default VideoContainer