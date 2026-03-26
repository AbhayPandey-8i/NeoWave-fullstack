import React from 'react'

const VideoBackground = () => {
    return (
        <div className='w-full' >
            <iframe className='w-full aspect-video'
                src="https://www.youtube.com/embed/BwaIF2KH8UM?si=kH7JTzeCzm6U5KKV&autoplay=1&mute=1"
                title="YouTube video player"
                frameborder="0"
                allowfullscreen>

            </iframe>
        </div>
    )
}

export default VideoBackground
