import React from 'react'
import { render, screen } from '@testing-library/react'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Home from '@/app/page'

const renderWithProvider = (component: React.ReactElement) => {
  return render(<LanguageProvider>{component}</LanguageProvider>)
}

describe('Welcome Page', () => {
  it('renders the welcome title', () => {
    renderWithProvider(<Home />)
    const title = screen.getByText('Welcome to Defluencer')
    expect(title).toBeInTheDocument()
  })

  it('renders the description', () => {
    renderWithProvider(<Home />)
    const description = screen.getByText(/Clear the fog in your brain/i)
    expect(description).toBeInTheDocument()
  })

  it('renders all feature cards', () => {
    renderWithProvider(<Home />)
    expect(screen.getByText('Articles')).toBeInTheDocument()
    expect(screen.getByText('Videos')).toBeInTheDocument()
    expect(screen.getByText('Images')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    renderWithProvider(<Home />)
    expect(screen.getByText(/Create and manage articles easily/i)).toBeInTheDocument()
    expect(screen.getByText(/Add and organize video content/i)).toBeInTheDocument()
    expect(screen.getByText(/Upload and manage images/i)).toBeInTheDocument()
  })

  it('renders navigation tabs', () => {
    renderWithProvider(<Home />)
    expect(screen.getByText('Help')).toBeInTheDocument()
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })
})

