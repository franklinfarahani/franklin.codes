import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from '@emotion/styled'

const AnimationMask = styled.span`
  display: block;
  overflow: hidden;
`

type SlideRevealProps = {
  isLoading: boolean
  el?: keyof JSX.IntrinsicElements
  delay ?: number
  children: React.ReactNode
}

const SlideReveal = ({isLoading, el = 'h1', delay = 0, children}: SlideRevealProps) => {
  const Element = el
  return (
    <Element>
      <AnimationMask>
        <TransitionGroup>
          {!isLoading && (
            <CSSTransition timeout={3000} classNames="slideup">
              <span style={{ transitionDelay: `${delay}ms` }}>
                {children}
              </span>
            </CSSTransition>
          )}
        </TransitionGroup>
      </AnimationMask>
    </Element>
  )
}

export default SlideReveal
