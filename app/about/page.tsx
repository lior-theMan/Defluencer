'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getStrings } from '@/lib/strings'
import { TextContent } from '@/components/content/TextContent'
import { Title } from '@/components/content/Title'
import { Paragraph } from '@/components/content/Paragraph'
import styles from './page.module.css'

export default function AboutPage() {
  const { language } = useLanguage()
  const strings = getStrings(language)

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <TextContent>
          <Title text={strings.welcome.aboutUs} level={1} className={styles.title} />
          <Paragraph text="About us content will be displayed here. Learn more about Defluencer and our mission." />
          <Paragraph text="We are dedicated to helping you clear the fog in your brain, spend less screen time, be more productive and be better at anything." />
        </TextContent>
      </div>
    </main>
  )
}

