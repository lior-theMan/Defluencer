'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from './Navigation'
import { LanguageSelector } from './LanguageSelector'
import styles from './TopNavigation.module.css'

export function TopNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Defluencer Logo"
            width={40}
            height={40}
            className={styles.logoImage}
            priority
          />
          <span className={styles.logoText}>Defluencer</span>
        </Link>
        <div className={styles.rightSection}>
          <Navigation />
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}

