'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { getStrings } from '@/lib/strings'
import styles from './Navigation.module.css'

export function Navigation() {
  const { language } = useLanguage()
  const strings = getStrings(language)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname === path
  }

  return (
    <nav className={styles.nav}>
      <Link
        href="/help"
        className={`${styles.tab} ${isActive('/help') ? styles.active : ''}`}
      >
        {strings.welcome.help}
      </Link>
      <Link
        href="/about"
        className={`${styles.tab} ${isActive('/about') ? styles.active : ''}`}
      >
        {strings.welcome.aboutUs}
      </Link>
      <Link
        href="/learn-more"
        className={`${styles.tab} ${isActive('/learn-more') ? styles.active : ''}`}
      >
        {strings.welcome.learnMore}
      </Link>
    </nav>
  )
}

