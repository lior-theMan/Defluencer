/**
 * Example usage of content components
 * 
 * This file demonstrates how to use the reusable content components
 * for easy content addition in the future.
 */

import { ImageContent } from '../content/ImageContent'
import { LocalVideoContent } from '../content/LocalVideoContent'
import { TextContent } from '../content/TextContent'
import { Title } from '../content/Title'
import { Paragraph } from '../content/Paragraph'

// Example: Using ImageContent
export function ExampleImage() {
  return (
    <ImageContent 
      src="https://example.com/image.jpg" 
      alt="Example image"
      width={800}
      height={600}
    />
  )
}

// Example: Using LocalVideoContent
export function ExampleVideo() {
  return (
    <LocalVideoContent
      src="https://example.com/video.mp4"
      title="Example video"
      controls={true}
    />
  )
}

// Example: Using TextContent with Title and Paragraph
export function ExampleText() {
  const titleStyle = {
    color: '#333',
    marginBottom: '1rem',
  }

  const paragraphStyle = {
    lineHeight: '1.8',
    color: '#666',
  }

  return (
    <TextContent>
      <Title 
        text="Example Title" 
        level={1} 
        textStyle={titleStyle} 
      />
      <Paragraph 
        text="This is the first paragraph with custom styling." 
        textStyle={paragraphStyle} 
      />
      <Paragraph 
        text="This is the second paragraph." 
        textStyle={paragraphStyle} 
      />
    </TextContent>
  )
}

// Example: Combined content
export function ExampleCombined() {
  return (
    <div>
      <TextContent>
        <Title text="My Article Title" level={2} />
        <Paragraph text="Introduction paragraph here." />
      </TextContent>
      
      <ImageContent 
        src="https://example.com/article-image.jpg" 
        alt="Article image"
      />
      
      <TextContent>
        <Paragraph text="More content after the image." />
      </TextContent>
      
      <LocalVideoContent
        src="https://example.com/demo-video.mp4"
        title="Demo video"
      />
    </div>
  )
}

