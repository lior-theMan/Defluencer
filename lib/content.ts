import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
// @ts-ignore - isomorphic-dompurify types may not be available
import DOMPurify from 'isomorphic-dompurify'

export interface ContentItem {
  id: string
  title: string
  date: string
  type: 'article' | 'video' | 'image'
  content?: string
  videoUrl?: string
  imageUrl?: string
  description?: string
}

const contentDirectory = path.join(process.cwd(), 'content')

// Ensure content directory exists
if (!fs.existsSync(contentDirectory)) {
  fs.mkdirSync(contentDirectory, { recursive: true })
}

export function getAllContent(): ContentItem[] {
  try {
    if (!fs.existsSync(contentDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(contentDirectory)
    const allContent = fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(contentDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          id,
          title: sanitizeInput(data.title || 'Untitled'),
          date: data.date || new Date().toISOString(),
          type: (data.type || 'article') as 'article' | 'video' | 'image',
          content: content,
          videoUrl: data.videoUrl ? sanitizeInput(data.videoUrl) : undefined,
          imageUrl: data.imageUrl ? sanitizeInput(data.imageUrl) : undefined,
          description: data.description ? sanitizeInput(data.description) : undefined,
        }
      })

    return allContent.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error('Error reading content:', error)
    return []
  }
}

export async function getContentById(id: string): Promise<ContentItem | null> {
  try {
    const fullPath = path.join(contentDirectory, `${id}.md`)
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()
    const sanitizedHtml = DOMPurify.sanitize(contentHtml)

    return {
      id,
      title: sanitizeInput(data.title || 'Untitled'),
      date: data.date || new Date().toISOString(),
      type: (data.type || 'article') as 'article' | 'video' | 'image',
      content: sanitizedHtml,
      videoUrl: data.videoUrl ? sanitizeInput(data.videoUrl) : undefined,
      imageUrl: data.imageUrl ? sanitizeInput(data.imageUrl) : undefined,
      description: data.description ? sanitizeInput(data.description) : undefined,
    }
  } catch (error) {
    console.error('Error reading content:', error)
    return null
  }
}

export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') {
    return ''
  }
  // Remove potentially dangerous characters and limit length
  return DOMPurify.sanitize(input.trim().slice(0, 10000))
}

export function validateContentType(type: string): type is 'article' | 'video' | 'image' {
  return ['article', 'video', 'image'].includes(type)
}

export function validateUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    return ['http:', 'https:'].includes(urlObj.protocol)
  } catch {
    return false
  }
}

