const YOUR_API_KEY = "AIzaSyDIAyhcy4tU_XIXGpaIM2zMnGSuEeXFuBo"

export const LIVE_CHAT_COUNT = 25
export const SUGGESTIONS_CACHE_COUNT = 10
export const WEBSITE_URL = "https://localhost:3000/"

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" + YOUR_API_KEY
export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=[videoID]&key=" + YOUR_API_KEY
export const YOUTUBE_VIDEO_INFO_API = "https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=[videoID]&key=" + YOUR_API_KEY

export const YOUTUBE_VIDEO_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=25&q=[videoSearchQuery]&key=" + YOUR_API_KEY

//"https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q="