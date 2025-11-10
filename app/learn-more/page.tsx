'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getStrings } from '@/lib/strings'
import { TextContent } from '@/components/content/TextContent'
import { Title } from '@/components/content/Title'
import { Paragraph } from '@/components/content/Paragraph'
import styles from './page.module.css'

export default function LearnMorePage() {
  const { language } = useLanguage()
  const strings = getStrings(language)

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <TextContent>
          <Title text={strings.welcome.learnMore} level={1} className={styles.title} />
          <Paragraph text="Learn more content will be displayed here. Discover additional resources and information about Defluencer." />
          <Paragraph text="Explore our features, read articles, watch videos, and browse images to learn more about what we offer." />
        </TextContent>
      </div>
    </main>
  )
}

