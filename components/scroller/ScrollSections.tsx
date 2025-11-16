'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from './ScrollSections.module.css'

export interface ScrollSectionItem {
	id: string
	element: React.ReactNode
}

export interface ScrollSectionsProps {
	sections: ScrollSectionItem[]
	peekPx?: number
	scrollDebounceMs?: number
}

export function ScrollSections({
	sections,
	peekPx = 80,
	scrollDebounceMs = 350,
}: ScrollSectionsProps) {
	const containerRef = useRef<HTMLDivElement>(null)
	const sectionRefs = useRef<HTMLDivElement[]>([])
	const [activeIndex, setActiveIndex] = useState(0)
	const isScrollingRef = useRef(false)
	const lastScrollAtRef = useRef(0)

	// Get the current section index based on scroll position
	const getCurrentSectionIndex = useCallback((): number => {
		if (!containerRef.current || sectionRefs.current.length === 0) return 0

		const container = containerRef.current
		const scrollTop = container.scrollTop
		const viewportHeight = container.clientHeight

		// Find which section's top is closest to the current scroll position
		let closestIndex = 0
		let closestDistance = Infinity

		for (let i = 0; i < sectionRefs.current.length; i++) {
			const section = sectionRefs.current[i]
			if (!section) continue

			const rect = section.getBoundingClientRect()
			const containerRect = container.getBoundingClientRect()
			const sectionTop = rect.top - containerRect.top + container.scrollTop
			const distance = Math.abs(scrollTop - (sectionTop - peekPx))

			if (distance < closestDistance) {
				closestDistance = distance
				closestIndex = i
			}
		}

		return closestIndex
	}, [peekPx])

	// Check if we're at the edge of the current section
	const isAtSectionEdge = useCallback(
		(direction: number): boolean => {
			if (!containerRef.current) return false

			const container = containerRef.current
			const currentIndex = getCurrentSectionIndex()
			const section = sectionRefs.current[currentIndex]
			if (!section) return false

			const containerRect = container.getBoundingClientRect()
			const sectionRect = section.getBoundingClientRect()
			const scrollTop = container.scrollTop
			const scrollBottom = scrollTop + container.clientHeight

			// Get section position relative to container scroll
			const sectionTop = sectionRect.top - containerRect.top + container.scrollTop
			const sectionBottom = sectionTop + sectionRect.height

			// Check if section is larger than viewport
			if (sectionRect.height > container.clientHeight) {
				// Large section: check if we're at the edge
				const threshold = 15 // Threshold for edge detection

				if (direction > 0) {
					// Scrolling down: check if viewport bottom is at/near section bottom
					return scrollBottom >= sectionBottom - threshold
				} else {
					// Scrolling up: check if viewport top is at/near section top (accounting for peek)
					return scrollTop <= sectionTop - peekPx + threshold
				}
			} else {
				// Small section: always allow navigation when scrolling
				return true
			}
		},
		[getCurrentSectionIndex, peekPx]
	)

	const scrollToSectionTop = useCallback(
		(index: number) => {
			const section = sectionRefs.current[index]
			if (!section || !containerRef.current) return

			const container = containerRef.current
			const containerRect = container.getBoundingClientRect()
			const sectionRect = section.getBoundingClientRect()
			const sectionTop = sectionRect.top - containerRect.top + container.scrollTop

			// Scroll to show the section at the top, accounting for peek
			isScrollingRef.current = true
			container.scrollTo({
				top: Math.max(0, sectionTop - peekPx),
				behavior: 'smooth',
			})

			setActiveIndex(index)

			// Reset scrolling flag after animation
			setTimeout(() => {
				isScrollingRef.current = false
			}, 600)
		},
		[peekPx]
	)

	const handleWheel = useCallback(
		(e: React.WheelEvent) => {
			if (!containerRef.current) return

			// If we're in the middle of a programmatic scroll, prevent wheel
			if (isScrollingRef.current) {
				// e.preventDefault()
				return
			}

			const now = Date.now()
			// Debounce rapid wheel events
			if (now - lastScrollAtRef.current < scrollDebounceMs / 3) {
				return
			}

			const delta = e.deltaY
			const direction = delta > 0 ? 1 : -1
			const currentIndex = getCurrentSectionIndex()

			// Check if we're at the edge of the current section
			if (isAtSectionEdge(direction)) {
				// At edge, navigate to next/previous section
				const nextIndex = Math.min(
					Math.max(currentIndex + direction, 0),
					sections.length - 1
				)

				if (nextIndex !== currentIndex) {
					// e.preventDefault()
					lastScrollAtRef.current = now
					scrollToSectionTop(nextIndex)
				}
			}
			// If not at edge, allow normal scrolling (don't prevent default)
		},
		[sections.length, scrollDebounceMs, isAtSectionEdge, getCurrentSectionIndex, scrollToSectionTop]
	)

	const setSectionRef = useCallback((el: HTMLDivElement | null, idx: number) => {
		if (el) {
			sectionRefs.current[idx] = el
		}
	}, [])

	// Update active index on scroll (only when not programmatically scrolling)
	useEffect(() => {
		const container = containerRef.current
		if (!container) return

		let ticking = false

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					if (!isScrollingRef.current) {
						const newIndex = getCurrentSectionIndex()
						if (newIndex !== activeIndex) {
							setActiveIndex(newIndex)
						}
					}
					ticking = false
				})
				ticking = true
			}
		}

		container.addEventListener('scroll', handleScroll)
		return () => {
			container.removeEventListener('scroll', handleScroll)
		}
	}, [activeIndex, getCurrentSectionIndex])

	const content = useMemo(
		() =>
			sections.map((s, idx) => (
				<div
					key={s.id}
					ref={(el) => setSectionRef(el, idx)}
					className={styles.section}
				>
					{s.element}
				</div>
			)),
		[sections, peekPx, setSectionRef]
	)

	return (
		<div
			ref={containerRef}
			className={styles.container}
			onWheel={handleWheel}
			role="region"
			aria-label="Scrollable sections"
		>
			{content}
		</div>
	)
}
