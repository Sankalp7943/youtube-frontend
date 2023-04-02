import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard'
import ShimmerCard from './ShimmerCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideos()
  },[])
  const getVideos = async ()=>{
    const videosData = await fetch(YOUTUBE_VIDEOS_API)
    const videosDataJson = await videosData.json()
    console.log("VIDEO DATA JSON", videosDataJson)
    setVideos(videosDataJson.items)
  }
  if (videos===undefined || videos.length===0){
    return (
      <ShimmerCard />
    )
  }
  return (
    <div className='grid m-auto px-2 gap-0 flex-wrap 3xl:grid-cols-6 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 first-line:'>
      {videos.map(video => (
		<div className='m-auto col-span-1'>
			<Link key={video.id} to={"/watch?v=" + video.id}>
			<VideoCard info={video}/>
			</Link>
		</div>))
      }
    </div>
  )
}

export default VideoContainer