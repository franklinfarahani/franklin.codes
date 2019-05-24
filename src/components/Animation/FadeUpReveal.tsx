import React, {Fragment} from 'react'
import { useInView } from 'react-intersection-observer'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from '@emotion/styled'

import config from '../../globals/config'

const { easing } = config

type FadeUpRevealProps = {
  as?: (keyof JSX.IntrinsicElements) | typeof Fragment
  delay ?: number
  children: React.ReactNode
}

const FadeUpReveal = ({as = 'div', delay = 0, children}: FadeUpRevealProps) => {
  const Element = as

  const Animated = styled.div`
    opacity: 0;
    transform: translateY(25px) skewY(-1deg) rotateX(-1deg);
    transition: transform 1000ms 100ms, opacity 450ms 150ms;
    
    &.fadeup-enter-active {
      opacity: 1;
      transform: translateY(0) skewY(0) rotateX(0);
    }
    &.fadeup-enter-done {
      opacity: 1;
      transform: translateY(0) skewY(0) rotateX(0);
    }
  `

  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  })

  return (
    <Element ref={ref}>
      <CSSTransition in={inView} timeout={3000} classNames="fadeup">
        <Animated>{children}</Animated>
      </CSSTransition>
    </Element>
  )
}

export default FadeUpReveal
