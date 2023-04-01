import React from "react"
import { v4 as uuidv4 } from 'uuid'

const commentsData = 
[{
    name: "Sankalp Sharma",
    text: "This is a cool project and feature",
    replies: [{
        name: "Aritro Mukherjee",
        text: "Indeed you are correct.",
        replies: []
    }],},
    {name: "Akshay Saini",
    text: "Good job! Keep rising!",
    replies: [{
        name: "Sankalp Sharma",
        text: "Thank you so much! All the best for your ventures too",
        replies: [{
            name: "Akshay Saini",
            text: "Thanks man, Appreciate it!",
            replies: [],
        }]
    }],},
    {name: "Raghav Parashar",
    text: "You must be an Awesome developer",
    replies: [{
        name: "Sankalp Sharma",
        text: "Thank you for your kind words",
        replies: [{
            name: "Abhinandan Sharma",
            text: "Nobody cares about the video at this point",
            replies: [{
                name: "Deepak Kumar",
                text: "Did anyone notice the comments are same on all videos, why didn't you use YouTube API for this?",
                replies: [{
                    name: "Sankalp Sharma",
                    text: "YouTube API data is not supporting n-level nested comments, they are only two level deep. Had to improvise.",
                    replies: [{
                        name: "Deepak Kumar",
                        text: "I see, thank you for clarifying",
                        replies: []
                    }]
                }]
            }]
        }]
    }],}
]


const Comment = ({ data }) => {
    console.log(data)
    const {name, text, replies} = data
    
    return (
        <div className="flex">
            <img className='h-12 m-2 p-2' alt='user-icon' src='https://cdn-icons-png.flaticon.com/512/666/666201.png'></img>
            <div className="p-2">
                <p className="font-bold">{name}</p>
                <p>{text}</p>

            </div>
        </div>
        )
}

const CommentsList = ({comments}) => {
    console.log("comments array", comments)
    return (
        comments.map((comment) => {return (
        <div>
            <Comment key={uuidv4()} data={comment} />
                <div className="ml-8 pl-6 border-l-black border">
                    <CommentsList comments={comment.replies}/>
                </div>
        </div>)})
        )
    
}

const CommentsSection = () => 
{
    console.log("comments in main", commentsData)
  return (
    <div className="mx-10 my-5 p-5 bg-gray-200 rounded-lg shadow-lg w-[1200px]">
        <h3 className="font-bold text-lg p-5">Comments:</h3>
        <div className="">
            <CommentsList comments={commentsData}/>
            {/* <Comment data={commentsData[0]}/> */}
        </div>    
    </div>
  )
}

export default CommentsSection