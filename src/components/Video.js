import React, { useState, useRef } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSideBar from './VideoSidebar'

function Video({url, channel, description, song, likes, messages, shares}) {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)

    const onVideoPress = () => {
        if (playing) {
          videoRef.current.pause();
          setPlaying(false);
        } else {
          videoRef.current.play();
          setPlaying(true);
        }
      };

    return (
        <div className='video'>
            <video src={url} onClick={onVideoPress} ref={videoRef} loop className='video__player'></video>
            <VideoFooter channel={channel} song={song} description={description} />
            <VideoSideBar likes={likes} messages={messages} shares={shares} />
        </div>
    )
}

export default Video