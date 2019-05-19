import React, { useEffect } from 'react'

/**
 * Link component that scrolls to the id given to it.
 * 
 * @param {string} href "#example"
 * @param props Any other prop(s) that an anchor tag could receive
 */
const AnchorLink = (props: React.PropsWithChildren<JSX.IntrinsicElements['a']>) => {
  
  useEffect(() => {
    require('smoothscroll-polyfill').polyfill()
  })

  const smoothScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    
    const id = props.href || '/#'
    const $anchor = document.getElementById(id.slice(1)) || document.body
    const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset
    window.scroll({
      top: offsetTop,
      behavior: 'smooth'
    })
    if (props.onClick) {props.onClick(e)}
  }
  
    
  return (
    <a {...props} onClick={smoothScroll} />
  )
}

export default AnchorLink