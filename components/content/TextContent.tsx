import React from 'react'
import styles from './TextContent.module.css'

export interface TextContentProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function TextContent({
  children,
  className = '',
  style,
}: TextContentProps) {
  return (
    <div className={`${styles.container} ${className}`} style={style}>
      {children}
    </div>
  )
}

