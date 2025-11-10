# Defluencer

A modern content management platform built with Next.js, TypeScript, and security best practices.

## Features

- 🎨 Beautiful welcome page with internationalization
- 🧩 Reusable content components (ImageContent, VideoContent, TextContent)
- 🌍 Multi-language support (English, Hebrew, Spanish, French, German)
- 📝 Easy content addition using simple components
- 🔒 Security-first approach with input sanitization
- ✅ Comprehensive testing setup
- 📱 Responsive design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Content

The project uses reusable components for easy content addition. Simply import and use the components:

### Using ImageContent

```tsx
import { ImageContent } from '@/components/content'

<ImageContent src="https://example.com/image.jpg" alt="Description" />
```

### Using VideoContent

```tsx
import { VideoContent } from '@/components/content'

<VideoContent src="https://example.com/video.mp4" title="Video Title" />
```

### Using TextContent with Title and Paragraph

```tsx
import { TextContent, Title, Paragraph } from '@/components/content'

<TextContent>
  <Title text="My Title" level={1} textStyle={{ color: '#333' }} />
  <Paragraph text="First paragraph text" textStyle={{ lineHeight: '1.8' }} />
  <Paragraph text="Second paragraph text" />
</TextContent>
```

### Complete Example

See `components/examples/ContentExamples.tsx` for more detailed examples.

All strings are internationalized and stored in `lib/strings.ts`. The language can be changed using the language selector in the UI.

## Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Run tests with coverage:
```bash
npm run test:coverage
```

## Security Features

- Input sanitization to prevent XSS attacks
- URL validation
- Content type validation
- Security headers (CSP, XSS Protection, etc.)
- Rate limiting support

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
defluencer/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout with LanguageProvider
│   ├── page.tsx            # Welcome page
│   └── globals.css         # Global styles
├── components/             # Reusable components
│   ├── content/            # Content components
│   │   ├── ImageContent.tsx
│   │   ├── VideoContent.tsx
│   │   ├── TextContent.tsx
│   │   ├── Title.tsx
│   │   └── Paragraph.tsx
│   ├── navigation/         # Navigation components
│   │   ├── Navigation.tsx
│   │   └── LanguageSelector.tsx
│   └── examples/           # Usage examples
├── contexts/              # React contexts
│   └── LanguageContext.tsx # Language state management
├── lib/                    # Utility functions
│   ├── strings.ts          # Internationalization strings
│   ├── content.ts          # Content management
│   └── security.ts         # Security utilities
└── __tests__/             # Test files
```

## License

MIT

