import React from 'react'

const VideoCard = ({info}) => {
  const {snippet, statistics} = info 
  const {channelTitle, title, thumbnails} = snippet
  const views = () => {
    const intViews = parseInt(statistics.viewCount)
    if (intViews<1000){
      return intViews+" views"
    }
    else if (intViews>1000 && intViews<1000000){
      return Math.round(intViews/1000)+"K views"
    }
    else if (intViews>1000000 && intViews<1000000000){
      return Math.round(intViews/1000000)+"M views"
    }
    else if (intViews>1000000000){
      return Math.round(intViews/1000000000)+"B views"
    }
    
  }

  return (
    <div className='flex flex-wrap m-2 p-2 w-60 rounded-lg bg-gray-200 hover:bg-gray-300 shadow-lg'>
      <img className='rounded-lg' alt='video-thumbnail' src={thumbnails.medium.url} />
      <ul className='m-1'>
        <li className='px-1 font-size-sm font-medium'>{title}</li>
        <li className='px-1 font-size-xs font-thin'>{channelTitle}</li>
        <li className='px-1 font-size-xs font-thin'>{views()}</li>
      </ul>
    </div>
  )
}

export default VideoCard