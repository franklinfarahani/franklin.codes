import React, {Fragment} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from '@emotion/styled'

import config from '../globals/config'

const { easing } = config

type FadeRevealProps = {
  isLoading: boolean
  el?: (keyof JSX.IntrinsicElements) | typeof Fragment
  delay ?: number
  children: React.ReactNode
}

const FadeReveal = ({isLoading, el = 'div', delay = 0, children}: FadeRevealProps) => {
  const Element = el

  const Animated = styled.div`
    &.fadein-enter {
      opacity: 0;
    }
    &.fadein-enter-active {
      opacity: 1;
      transition: opacity 1s ${easing};
      transition-delay: ${delay + 'ms'};
    }
    &.fadein-enter-done {
      transition: all 1s ${easing};
    }
  `

  return (
    <Element>
      <TransitionGroup>
        {!isLoading && (
          <CSSTransition timeout={3000} classNames="fadein">
            <Animated>{children}</Animated>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Element>
  )
}

export default FadeReveal
