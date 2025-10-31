'use client'
import { motion } from 'framer-motion'

// Airport-style flip animation for entire lines
interface AirportTextProps {
  text: string
  className?: string
  startDelay?: number
}

export const AirportText = ({
  text,
  className = '',
  startDelay = 0,
}: AirportTextProps) => {
  return (
    <motion.span
      initial={{ rotateX: -90, opacity: 0 }}
      animate={{ rotateX: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: startDelay,
        ease: [0.23, 1, 0.32, 1],
        type: 'spring',
        stiffness: 80,
        damping: 12,
      }}
      style={{
        transformOrigin: 'center bottom',
        transformStyle: 'preserve-3d',
      }}
      className={`inline-block ${className}`}
    >
      {text}
    </motion.span>
  )
}

export default AirportText
