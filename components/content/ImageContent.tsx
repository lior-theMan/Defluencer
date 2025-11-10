import React from 'react'
import Image from 'next/image'
import styles from './ImageContent.module.css'

export interface ImageContentProps {
  src: string
  alt?: string
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
}

export function ImageContent({
  src,
  alt = 'Image',
  width,
  height,
  className = '',
  style,
}: ImageContentProps) {
  return (
    <div className={`${styles.container} ${className}`} style={style}>
      <Image
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        className={styles.image}
        loading="lazy"
      />
    </div>
  )
}

