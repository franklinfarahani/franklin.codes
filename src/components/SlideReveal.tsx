import React, {Fragment} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from '@emotion/styled'

import config from '../globals/config'

const { easing } = config

const AnimationMask = styled.span`
  display: block;
  overflow: hidden;
`

type SlideRevealProps = {
  isLoading: boolean
  el?: (keyof JSX.IntrinsicElements) | typeof Fragment
  delay ?: number
  children: React.ReactNode
}

const SlideReveal = ({isLoading, el = 'h1', delay = 0, children}: SlideRevealProps) => {
  const Element = el

  const Animated = styled.div`
    &.slideup-enter {
      display: block;
      transform: translateY(100%);
    }
    &.slideup-enter-active {
      transform: translateY(0);
      transition: transform 1s ${easing};
      transition-delay: ${delay + 'ms'};
    }
    &.slideup-enter-done {
      transition: all 1s ${easing};
    }
  `

  return (
    <Element>
      <AnimationMask>
        <TransitionGroup>
          {!isLoading && (
            <CSSTransition timeout={3000} classNames="slideup">
              <Animated>{children}</Animated>
            </CSSTransition>
          )}
        </TransitionGroup>
      </AnimationMask>
    </Element>
  )
}

export default SlideReveal
