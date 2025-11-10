'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getStrings } from '@/lib/strings'
import { TextContent } from '@/components/content/TextContent'
import { Title } from '@/components/content/Title'
import { Paragraph } from '@/components/content/Paragraph'
import styles from './page.module.css'
import { ImageContent } from '@/components/content'

export default function Home() {
  const { language } = useLanguage()
  const strings = getStrings(language)

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ImageContent src="/logo.png" alt="Defluencer Logo" width={100} height={100} />
        <Title text={strings.welcome.title} level={1} className={styles.title} />
        <TextContent>
          <Paragraph text={strings.welcome.description} className={styles.description} />
        </TextContent>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h2>{strings.content.articles}</h2>
            <p>{strings.content.articlesDescription}</p>
          </div>
          <div className={styles.feature}>
            <h2>{strings.content.videos}</h2>
            <p>{strings.content.videosDescription}</p>
          </div>
          <div className={styles.feature}>
            <h2>{strings.content.images}</h2>
            <p>{strings.content.imagesDescription}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

