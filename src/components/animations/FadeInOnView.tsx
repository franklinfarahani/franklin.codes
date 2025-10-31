'use client'
import { motion, type MotionProps } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Props extends MotionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  threshold?: number
}

export default function FadeInOnView({
  children,
  className,
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  ...props
}: Props) {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, threshold])

  return (
    <motion.div
      ref={setRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
