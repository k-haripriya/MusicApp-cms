import React from 'react'
import { videoPlayerProps } from '../../../Types/Types'

const VideoPlayer:React.FC<videoPlayerProps> = (props) => {
    const { className, video } = props;
  return (
    <video autoPlay loop muted  className={className}>
      <source src={video} />
    </video>
  )
}

export default VideoPlayer