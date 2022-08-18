export default async (req, res) => {
    const API_KEY = process.env.YOUTUBE_API_KEY
    const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${MY_PLAYLIST}&key=${API_KEY}`)
    const json = await response.json()

    
}