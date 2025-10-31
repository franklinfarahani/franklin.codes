'use client'
import { type ReactNode, useEffect } from 'react'
import { motion, useAnimate, type Easing } from 'framer-motion'

interface Props {
  children?: ReactNode
  text?: string
  className?: string
  delay?: number
  duration?: number
  ease?: Easing
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function AnimatedHeading({
  text,
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  ease = 'easeOut',
  as: Component = 'h1',
}: Props) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      scope.current,
      {
        opacity: 1,
        y: 0,
      },
      {
        duration,
        delay,
        ease,
      }
    )
  }, [animate, delay, duration, ease, scope])

  return (
    <motion.div ref={scope} initial={{ opacity: 0, y: 20 }}>
      <Component className={className}>{text ?? children}</Component>
    </motion.div>
  )
}
