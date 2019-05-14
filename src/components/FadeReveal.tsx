import React, {Fragment} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from '@emotion/styled'

import config from '../globals/config'

const { easing } = config

type FadeRevealProps = {
  isLoading: boolean
  as?: (keyof JSX.IntrinsicElements) | typeof Fragment
  delay ?: number
  children: React.ReactNode
}

const FadeReveal = ({isLoading, as = 'div', delay = 0, children}: FadeRevealProps) => {
  const Element = as

  const Animated = styled.div`
    &.fadein-enter {
      opacity: 0;
    }
    &.fadein-enter-active {
      opacity: 1;
      transition: opacity 1s ${easing};
      transition-delay: ${delay + 'ms'};
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
