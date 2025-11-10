import React from 'react'
import styles from './Title.module.css'

export interface TitleProps {
  text: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  textStyle?: React.CSSProperties
  className?: string
}

export function Title({
  text,
  level = 1,
  textStyle,
  className = '',
}: TitleProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Tag
      className={`${styles.title} ${styles[`level${level}`]} ${className}`}
      style={textStyle}
    >
      {text}
    </Tag>
  )
}

