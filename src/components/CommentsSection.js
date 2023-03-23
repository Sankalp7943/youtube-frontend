const CommentsSection = ({videoID}) => {

    const commentsData = 
    {
        name: "Sankalp Sharma",
        text: "This is a cool project and feature",
        replies: [{
            name: "Aritro Mukherjee",
            text: "Indeed you are correct.",
            replies: []
        }],
        name: "Akshay Saini",
        text: "Good job! Keep rising!",
        replies: [{
            name: "Sankalp Sharma",
            text: "Thank you so much! All the best for your ventures too",
            replies: [{
                name: "Akshay Saini",
                text: "Thanks man, Appreciate it!",
                replies: [],
            }]
        }],
        name: "Raghav Parashar",
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
        }],
    }
  return (
    <div className="mx-10 my-5 p-5 bg-co">
        heelo
    </div>
  )
}

export default CommentsSection