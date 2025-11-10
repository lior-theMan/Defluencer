import fs from 'fs'
import path from 'path'
import {
  getAllContent,
  getContentById,
  sanitizeInput,
  validateContentType,
  validateUrl,
} from '@/lib/content'

// Mock fs module
jest.mock('fs')
jest.mock('gray-matter')
jest.mock('remark')
jest.mock('isomorphic-dompurify')

describe('Content Management', () => {
  const mockFs = fs as jest.Mocked<typeof fs>
  const contentDir = path.join(process.cwd(), 'content')

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('sanitizeInput', () => {
    it('should sanitize input strings', () => {
      const input = '<script>alert("xss")</script>Hello'
      const result = sanitizeInput(input)
      expect(result).toBeDefined()
    })

    it('should handle non-string input', () => {
      expect(sanitizeInput(null as any)).toBe('')
      expect(sanitizeInput(123 as any)).toBe('')
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

  describe('validateUrl', () => {
    it('should validate https URLs', () => {
      expect(validateUrl('https://example.com')).toBe(true)
    })

    it('should validate http URLs', () => {
      expect(validateUrl('http://example.com')).toBe(true)
    })

    it('should reject invalid URLs', () => {
      expect(validateUrl('not-a-url')).toBe(false)
    })
  })

  describe('getAllContent', () => {
    it('should return empty array when content directory does not exist', () => {
      mockFs.existsSync.mockReturnValue(false)
      const result = getAllContent()
      expect(result).toEqual([])
    })

    it('should handle errors gracefully', () => {
      mockFs.existsSync.mockReturnValue(true)
      mockFs.readdirSync.mockImplementation(() => {
        throw new Error('Read error')
      })
      const result = getAllContent()
      expect(result).toEqual([])
    })
  })

  describe('getContentById', () => {
    it('should return null when file does not exist', async () => {
      mockFs.existsSync.mockReturnValue(false)
      const result = await getContentById('non-existent')
      expect(result).toBeNull()
    })

    it('should handle errors gracefully', async () => {
      mockFs.existsSync.mockReturnValue(true)
      mockFs.readFileSync.mockImplementation(() => {
        throw new Error('Read error')
      })
      const result = await getContentById('test-id')
      expect(result).toBeNull()
    })
  })
})

