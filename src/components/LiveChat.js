import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import ChatMessage from './ChatMessage'
import { v4 as uuidv4 } from 'uuid'

const LiveChat = () => {
    const dispatch = useDispatch()
    const ChatMessages = useSelector(store=>store.chat.messages)
    const [liveMessage, setLiveMessage] = useState("")
    const messagesArray = [
        {name: "Akshay Saini", message: "Namaste"},
        {name: "Sankalp Sharma", message: "Hola Amigos"},
        {name: "Eric", message: "Bonjour"},
        {name: "Kevin", message: "Greetings"},
        {name: "Dmitri", message: "Privet"},
        {name: "Miguel", message: "Aloha"},
        {name: "Yuki", message: "Moisi Moishi"},
        {name: "Asad", message: "Salam Walekkum"},
        {name: "Dmitri", message: "Dasvidaniya"},
        {name: "Sankalp Sharma", message: "Adios"},
        {name: "Yuki", message: "Sayonara"},
    ]
    useEffect(()=>{
        const liveChatTimer = setInterval(()=>{
            console.log("API polling")
            dispatch(addMessage(messagesArray[parseInt(Math.random()*10)]))
        }, 2000)
        return ()=>{
            clearInterval(liveChatTimer)
        }
    },)

  return (
    <div className='h-[600px] w-full bg-gray-200 rounded-lg shadow-2xl'>
        <div className='p-5 h-[530px] w-full overflow-y-scroll flex flex-col-reverse'>
            {ChatMessages.map((msg)=><ChatMessage key={uuidv4()} name={msg.name} message={msg.message}/>)}
        </div>
        <form onSubmit={
            (e)=>{e.preventDefault()
            dispatch(addMessage({name:"Sankalp Sharma", message:liveMessage}))
            setLiveMessage("")}}
            className='h-[40px] bg-gray-300 m-3 p-2 rounded-lg shadow-md items-center grid grid-cols-6' >
            <input placeholder="Type message here :)" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}} type="text" className='col-span-5 mx-2 px-2 rounded-lg shadow-inner bg-gray-200 '></input>
            <button type="submit"  className='col-span-1 h-full font-medium mx-2 px-2 rounded-lg shadow-md bg-gray-400 hover:bg-gray-500'>Send</button>
        </form>
    </div>

  )
}

export default LiveChat