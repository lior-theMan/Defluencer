import type { Metadata } from 'next'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { TopNavigation } from '@/components/navigation/TopNavigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'Defluencer',
  description: 'A platform for content management',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <TopNavigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

