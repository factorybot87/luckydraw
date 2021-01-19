import React from 'react'
import style from './style.scss'

export enum AudioMimeTypes {
  mpeg = 'audio/mpeg',
  m4a = 'audio/x-m4a'
}

interface AudioPlayerProps {
  url: string
  type: AudioMimeTypes
}

const AudioPlayer = ({ url, type }: AudioPlayerProps) => {
  return (
    <div className={style.audioContainer}>
      <audio controls autoPlay>
        <source src={url} type={type} />
      </audio>
    </div>
  )
}

export default AudioPlayer
