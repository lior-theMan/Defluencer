'use client'

import {useLanguage} from '@/contexts/LanguageContext'
import {getStrings} from '@/lib/strings'
import {TextContent} from '@/components/content/TextContent'
import {Title} from '@/components/content/Title'
import {Paragraph} from '@/components/content/Paragraph'
import styles from './page.module.css'
import {ImageContent} from '@/components/content'
import {ScrollSections} from '@/components/scroller/ScrollSections'
import BulletList from '@/components/content/BulletList'
import {EmbedVideoContent} from "@/components/content/EmbedVideoContent";

export default function Home() {
    const {language} = useLanguage()
    const strings = getStrings(language)

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <ScrollSections
                    peekPx={80}
                    sections={[
                        {
                            id: 'intro',
                            element: (
                                <div>
                                    <ImageContent src="/logo.png" alt="Defluencer Logo" width={120} height={120}/>
                                    <Title text={strings.welcome.title} level={1} className={styles.title}/>
                                    <TextContent>
                                        <Paragraph text={strings.welcome.description} className={styles.description}/>
                                        <Paragraph text={strings.welcome.defluencer} className={styles.description}/>
                                    </TextContent>
                                </div>
                            ),
                        },
                        {
                            id: 'nutshell',
                            element: (
                                <div>
                                    <Title text={strings.sections.whatsHappening} level={2} className={styles.title}/>
                                    <BulletList className={styles.description} items={[
                                        strings.sections.addictionByDesign,
                                        strings.sections.cheapDopamine,
                                        strings.sections.manipulatedDecisions,
                                        strings.sections.distortedReality,
                                    ]}/>
                                    <ImageContent src="/phone in bed.jpg" alt="Phone in Bed" width={600} height={600}/>
                                </div>
                            ),
                        },
                        {
                            id: 'focus',
                            element: (
                                <div>
                                    <Title text={strings.sections.roleOfDeinfluencer} level={2} className={styles.title}/>
                                    <TextContent>
                                        <Paragraph className={styles.description} text={strings.sections.deinfluencerDescription}/>
                                    </TextContent>
                                </div>
                            ),
                        },
                        {
                            id: 'learn',
                            element: (
                                <div>
                                    <Title text={strings.sections.implicationsForUsers} level={2} className={styles.title}/>
                                    <BulletList className={styles.description} items={[
                                        strings.sections.implicationAddiction,
                                        strings.sections.implicationLossOfMeaning,
                                        strings.sections.implicationDecisionMaking,
                                        strings.sections.implicationPerspective,
                                    ]}/>
                                </div>
                            ),
                        },
                        {
                            id: 'video',
                            element: (
                                <EmbedVideoContent src={"https://www.youtube.com/embed/WPZyUdItzOs"}/>
                            ),
                        },
                    ]}
                />
            </div>
        </main>
    )
}
