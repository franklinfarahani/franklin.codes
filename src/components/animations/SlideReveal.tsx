'use client'
import { type ReactNode, useEffect, useState } from 'react'

/**
 * SlideReveal component that animates text sliding up from bottom
 *
 * This component replaces the original emotion/react-transition-group SlideReveal component.
 *
 * CONVERSION NOTES:
 * - Original used @emotion/styled with CSSTransition and TransitionGroup
 * - Original relied on CSS classes: slideup-enter, slideup-enter-active, slideup-enter-done
 * - Original used config.easing for custom cubic-bezier timing
 *
 * NEW IMPLEMENTATION:
 * - Uses pure CSS transitions with Tailwind classes
 * - Uses React hooks (useState, useEffect) instead of CSSTransition
 * - Maintains the same visual effect and timing
 * - Uses cubic-bezier(0.23,1,0.32,1) easing to match original config.easing
 * - Eliminates dependency on emotion and react-transition-group
 *
 * @example
 * <SlideReveal as="h1" delay={500} isLoading={false}>
 *   Hello World!
 * </SlideReveal>
 */
interface SlideRevealProps {
  /** Controls whether the animation should be prevented while loading */
  isLoading?: boolean
  /** HTML element to render as (defaults to 'h1') */
  as?: keyof React.JSX.IntrinsicElements
  /** Animation delay in milliseconds */
  delay?: number
  /** CSS classes to apply to the wrapper element */
  className?: string
  /** Content to be animated */
  children: ReactNode
}

const SlideReveal = ({
  isLoading = false,
  as = 'h1',
  delay = 0,
  className = '',
  children,
}: SlideRevealProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const Element = as as React.ElementType

  // Trigger animation after delay when not loading
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShouldAnimate(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isLoading, delay])

  return (
    <Element className={className}>
      {/* Mask container that hides the overflowing content */}
      <span className="block overflow-hidden">
        {/* Animated content that slides up from bottom */}
        <span
          className={`
            block
            transition-transform
            duration-1000
            ease-[cubic-bezier(0.23,1,0.32,1)]
            ${shouldAnimate ? 'translate-y-0' : 'translate-y-full'}
          `}
        >
          {children}
        </span>
      </span>
    </Element>
  )
}

export default SlideReveal
