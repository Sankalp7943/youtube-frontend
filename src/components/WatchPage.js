import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'
import { closeHome } from '../utils/homeSlice'
import CommentsSection from './CommentsSection'
import VideoData from './VideoData'

const WatchPage = () => {
    const [searchParams] = useSearchParams()
    const videoID = searchParams.get("v")
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
        dispatch(closeHome())
    },)
    return (
    <div className='flex flex-col'>
        <div className='m-10 '>
            <iframe className='rounded-lg shadow-2xl shadow-current' width="1200" height="600" 
            src={"https://www.youtube.com/embed/"+videoID} title="YouTube video player" 
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen></iframe>
        </div>
        <VideoData info={videoID} />
        <CommentsSection />
    </div>
  )
}

export default WatchPage