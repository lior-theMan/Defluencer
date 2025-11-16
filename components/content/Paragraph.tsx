import React from 'react'
import styles from './Paragraph.module.css'

export interface ParagraphProps {
  text: string
  textStyle?: React.CSSProperties
  className?: string
}

export function Paragraph({
  text,
  textStyle,
  className = '',
}: ParagraphProps) {
  return (
      <div
          className={`${styles.paragraph} ${className}`}
          style={textStyle}
          dangerouslySetInnerHTML={{ __html: text }} />
  )
}

