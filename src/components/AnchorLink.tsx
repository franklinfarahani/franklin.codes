import React, { useEffect } from 'react'

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