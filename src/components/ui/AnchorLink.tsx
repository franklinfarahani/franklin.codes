'use client'
import { useCallback } from 'react'
import type { ComponentProps } from 'react'

type AnchorLinkProps = ComponentProps<'a'> & {
  offset?: number
}

/**
 * Link component that smoothly scrolls to the target element.
 * @param props Standard anchor props plus optional offset
 */
export default function AnchorLink({
  children,
  href = '/#',
  offset = 0,
  onClick,
  ...props
}: AnchorLinkProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()

      const targetId = href.slice(1)
      const element = document.getElementById(targetId) || document.body
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset

      window.scrollTo({
        top,
        behavior: 'smooth',
      })

      onClick?.(e)
    },
    [href, offset, onClick]
  )

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
