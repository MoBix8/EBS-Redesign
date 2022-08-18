import React from 'react'
import ReactPlayer from 'react-player'
import YouTubePlayer from 'react-player/youtube'
import YouTube from 'react-youtube'

const RokuGuide = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className=' w-full flex items-center justify-between py-5 place-items-center'>
        <div/>
        <div className='flex flex-col items-center justify-between'>
          <h1 className=' pb-3'>How to Install EBS Tv on Roku Devices</h1>
          <YouTube videoId='NEdpXl4soFA' opts={opts} />
        </div>
        <div />
    </div>
  )
}

export default RokuGuide