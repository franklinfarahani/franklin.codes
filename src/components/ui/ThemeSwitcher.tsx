'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Constants for the theme switcher animation
const width = 60
const circleSize = 23
const sideOffset = 5.5
const transitionTime = 0.2

interface ThemeCircleProps {
  isDark: boolean
}

const ThemeCircle = ({ isDark }: ThemeCircleProps) => {
  return (
    <motion.div
      className="flex items-center justify-center relative rounded-full w-[23px] h-[23px] overflow-hidden"
      initial={false}
      animate={{
        x: isDark ? width - circleSize - sideOffset : sideOffset,
        background: isDark
          ? 'radial-gradient(farthest-corner at 66% 33%, #F7F7F7 0%, #888888 70%)'
          : 'radial-gradient(farthest-corner at 66% 33%, #FFC700 0%, #FF9900 70%)',
      }}
      transition={{ duration: transitionTime, ease: 'easeInOut' }}
    >
      {isDark && (
        <motion.div
          className="w-[7px] h-[5px] rounded-full absolute"
          style={{
            background:
              'radial-gradient(farthest-corner at 33% 80%, #F7F7F7 0%, #888888 100%)',
            transform: 'translate(4px, -4px) rotate(45deg)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: transitionTime }}
        />
      )}
    </motion.div>
  )
}

const Stars = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[
        { size: 2, x: 12, y: 11, index: 1 },
        { size: 1.5, x: 20, y: 13, index: 3 },
        { size: 1, x: 15, y: 20, index: 4 },
        { size: 2.5, x: 25, y: 16, index: 5 },
      ].map((star) => (
        <motion.div
          key={star.index}
          className="rounded-full bg-white absolute"
          style={{
            width: star.size,
            height: star.size,
            top: star.y,
            left: star.x,
          }}
          initial={false}
          animate={{
            opacity: isDark ? 1 : 0,
            y: isDark ? 0 : 10,
          }}
          transition={{
            duration: 0.05 * star.index,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return false

    // Read from localStorage and system preference
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') return true
    if (theme === 'light') return false
    // No stored preference - check system preference, default to dark
    return !window.matchMedia('(prefers-color-scheme: light)').matches
  })

  useEffect(() => {
    // Sync with DOM state on mount
    if (typeof window !== 'undefined') {
      const actualTheme = document.documentElement.classList.contains('dark')
      if (actualTheme !== isDark) {
        setIsDark(actualTheme)
      }
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (typeof window !== 'undefined') {
      if (newTheme) {
        // Whenever the user explicitly chooses dark mode
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
      } else {
        // Whenever the user explicitly chooses light mode
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleTheme()
    }
  }

  return (
    <div className="inline-block ml-5">
      <motion.div
        className="flex items-center relative h-[33px] w-[60px] rounded-[17px] cursor-pointer"
        style={{
          boxShadow: `inset 0 0 0 2.5px currentColor`,
        }}
        initial={false}
        animate={{
          backgroundColor: isDark ? '#171717' : '#F2F2F2',
        }}
        whileTap={{ scale: 1.03 }}
        transition={{ duration: transitionTime }}
        onClick={toggleTheme}
        onKeyDown={handleKeyPress}
        role="button"
        tabIndex={0}
        aria-label="Switch between light and dark mode"
      >
        <Stars isDark={isDark} />
        <ThemeCircle isDark={isDark} />
      </motion.div>
    </div>
  )
}
