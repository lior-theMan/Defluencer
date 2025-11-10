import React from 'react'
import styles from './VideoContent.module.css'

export interface VideoContentProps {
  src: string
  title?: string
  width?: number | string
  height?: number | string
  className?: string
  style?: React.CSSProperties
  controls?: boolean
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
}

export function VideoContent({
  src,
  title,
  width = '100%',
  height = 'auto',
  className = '',
  style,
  controls = true,
  autoplay = false,
  loop = false,
  muted = false,
}: VideoContentProps) {
  return (
    <div className={`${styles.container} ${className}`} style={style}>
      <video
        src={src}
        title={title}
        width={width}
        height={height}
        controls={controls}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        className={styles.video}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

