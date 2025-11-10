// @ts-ignore - isomorphic-dompurify types may not be available
import DOMPurify from 'isomorphic-dompurify'

/**
 * Sanitizes user input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') {
    return ''
  }
  return DOMPurify.sanitize(input.trim())
}

/**
 * Validates and sanitizes HTML content
 */
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'img'],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title'],
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  })
}

/**
 * Validates URL to prevent malicious links
 */
export function validateUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return false
    }
    // Additional validation can be added here
    return true
  } catch {
    return false
  }
}

/**
 * Validates content type
 */
export function validateContentType(type: string): type is 'article' | 'video' | 'image' {
  return ['article', 'video', 'image'].includes(type)
}

/**
 * Rate limiting helper (simple in-memory implementation)
 * In production, use Redis or a proper rate limiting service
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 100,
  windowMs: number = 60000
): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

/**
 * Input validation and sanitization
 */
export function validateAndSanitizeInput(input: {
  title?: string
  content?: string
  url?: string
  type?: string
}): { isValid: boolean; sanitized?: any; error?: string } {
  if (input.title && input.title.length > 200) {
    return { isValid: false, error: 'Title is too long (max 200 characters)' }
  }

  if (input.content && input.content.length > 50000) {
    return { isValid: false, error: 'Content is too long (max 50000 characters)' }
  }

  if (input.url && !validateUrl(input.url)) {
    return { isValid: false, error: 'Invalid URL format' }
  }

  if (input.type && !validateContentType(input.type)) {
    return { isValid: false, error: 'Invalid content type' }
  }

  return {
    isValid: true,
    sanitized: {
      title: input.title ? sanitizeInput(input.title) : undefined,
      content: input.content ? sanitizeHtml(input.content) : undefined,
      url: input.url ? sanitizeInput(input.url) : undefined,
      type: input.type as 'article' | 'video' | 'image' | undefined,
    },
  }
}

