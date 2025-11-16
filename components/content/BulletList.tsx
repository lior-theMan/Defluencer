import React from 'react'
import styles from './BulletList.module.css'

export interface BulletListProps {
    className?: string
    style?: React.CSSProperties,
    items: string[]
  }

export default function BulletList({
    className = '',
    style,
    items
  }: BulletListProps) {
    return (
    <div className={`${styles.container} ${className}`} style={style}>
        <ul className={styles.list}>
            {items.map((item, index) => (
                <li key={index} className={styles.item} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
        </ul>
    </div>
    )
}