import {
  sanitizeInput,
  sanitizeHtml,
  validateUrl,
  validateContentType,
  checkRateLimit,
  validateAndSanitizeInput,
} from '@/lib/security'

describe('Security Utilities', () => {
  describe('sanitizeInput', () => {
    it('should sanitize XSS attempts', () => {
      const malicious = '<script>alert("xss")</script>Hello'
      const result = sanitizeInput(malicious)
      expect(result).not.toContain('<script>')
      expect(result).toContain('Hello')
    })

    it('should handle empty strings', () => {
      expect(sanitizeInput('')).toBe('')
    })

    it('should trim whitespace', () => {
      expect(sanitizeInput('  hello  ')).toBe('hello')
    })
  })

  describe('sanitizeHtml', () => {
    it('should allow safe HTML tags', () => {
      const safeHtml = '<p>Hello <strong>world</strong></p>'
      const result = sanitizeHtml(safeHtml)
      expect(result).toContain('<p>')
      expect(result).toContain('<strong>')
    })

    it('should remove dangerous scripts', () => {
      const dangerous = '<script>alert("xss")</script><p>Safe</p>'
      const result = sanitizeHtml(dangerous)
      expect(result).not.toContain('<script>')
      expect(result).toContain('<p>Safe</p>')
    })
  })

  describe('validateUrl', () => {
    it('should validate https URLs', () => {
      expect(validateUrl('https://example.com')).toBe(true)
    })

    it('should validate http URLs', () => {
      expect(validateUrl('http://example.com')).toBe(true)
    })

    it('should reject javascript: URLs', () => {
      expect(validateUrl('javascript:alert(1)')).toBe(false)
    })

    it('should reject invalid URLs', () => {
      expect(validateUrl('not-a-url')).toBe(false)
    })
  })

  describe('validateContentType', () => {
    it('should validate article type', () => {
      expect(validateContentType('article')).toBe(true)
    })

    it('should validate video type', () => {
      expect(validateContentType('video')).toBe(true)
    })

    it('should validate image type', () => {
      expect(validateContentType('image')).toBe(true)
    })

    it('should reject invalid types', () => {
      expect(validateContentType('invalid')).toBe(false)
    })
  })

  describe('checkRateLimit', () => {
    beforeEach(() => {
      // Clear rate limit map before each test
      jest.clearAllMocks()
    })

    it('should allow requests within limit', () => {
      expect(checkRateLimit('test-id', 10, 1000)).toBe(true)
      expect(checkRateLimit('test-id', 10, 1000)).toBe(true)
    })

    it('should block requests exceeding limit', () => {
      const identifier = 'limit-test'
      const maxRequests = 2

      expect(checkRateLimit(identifier, maxRequests, 1000)).toBe(true)
      expect(checkRateLimit(identifier, maxRequests, 1000)).toBe(true)
      expect(checkRateLimit(identifier, maxRequests, 1000)).toBe(false)
    })
  })

  describe('validateAndSanitizeInput', () => {
    it('should validate and sanitize valid input', () => {
      const input = {
        title: 'Test Title',
        content: '<p>Safe content</p>',
        url: 'https://example.com',
        type: 'article',
      }

      const result = validateAndSanitizeInput(input)
      expect(result.isValid).toBe(true)
      expect(result.sanitized).toBeDefined()
      expect(result.sanitized?.title).toBe('Test Title')
    })

    it('should reject title that is too long', () => {
      const input = {
        title: 'a'.repeat(201),
      }

      const result = validateAndSanitizeInput(input)
      expect(result.isValid).toBe(false)
      expect(result.error).toContain('Title is too long')
    })

    it('should reject invalid URL', () => {
      const input = {
        url: 'javascript:alert(1)',
      }

      const result = validateAndSanitizeInput(input)
      expect(result.isValid).toBe(false)
      expect(result.error).toContain('Invalid URL')
    })

    it('should reject invalid content type', () => {
      const input = {
        type: 'invalid-type',
      }

      const result = validateAndSanitizeInput(input)
      expect(result.isValid).toBe(false)
      expect(result.error).toContain('Invalid content type')
    })
  })
})

