'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getStrings } from '@/lib/strings'
import { TextContent } from '@/components/content/TextContent'
import { Title } from '@/components/content/Title'
import { Paragraph } from '@/components/content/Paragraph'
import styles from './page.module.css'

export default function HelpPage() {
  const { language } = useLanguage()
  const strings = getStrings(language)

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <TextContent>
          <Title text={strings.welcome.help} level={1} className={styles.title} />
          <Paragraph text="Help content will be displayed here. This page provides assistance and guidance for using Defluencer." />
          <Paragraph text="You can find answers to common questions, tutorials, and support resources." />
        </TextContent>
      </div>
    </main>
  )
}

