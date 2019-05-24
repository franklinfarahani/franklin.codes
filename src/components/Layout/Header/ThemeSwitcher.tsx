// Credit for ThemeSwitcher comp goes to [@thekitze](https://twitter.com/thekitze)

import React from 'react'
import styled from '@emotion/styled'

import { Theme } from '../../../globals/theme'

const width = 60
const circleSize = 23
const sideOffset = 5.5
const borderThickness = 2.5
const transitionTime = 200

const Wrapper = styled.div`
  display: 'inline-block';
  margin-left: 20px;
  border-radius: 17;
  overflow: 'hidden';
  will-change: 'transform';
  outline: none;
  cursor: pointer;
`

// Used box-shadow instead of border for finer (fractional) control of it's thickness
export const StyledThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 33px;
  width: ${width}px;
  box-shadow: inset 0 0 0 ${borderThickness}px ${({theme}) => theme.text};
  border-radius: 17px;
  transition: all ${transitionTime}ms linear;
  background-color: ${({theme}) => theme.cardBg};

  &:active {
    transform: scale(1.03);
  }  
`

export const Star = styled.div<{
  size: number
  x: number
  y: number
  index: number
}>`
  border-radius: 100%;
  width: 3px;
  height: 3px;
  background-color: white;
  position: absolute;

  ${({ size, x, y, index, theme }) => `
    transition: all ${50 * index}ms linear;
    width: ${size}px;
    height: ${size}px;
    top: ${6 + y}px;
    left: ${7 + x}px;

    ${theme.type === Theme.Light && `
        opacity: 0;
        transform: translateY(10px);
    `}
  `};
`

export const Stars = styled.div`
  ${({ theme }) => theme.type === Theme.Dark && 'opacity: 1;'};
`

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 100%;
  width: ${circleSize}px;
  overflow: hidden;
  height: ${circleSize}px;
  transition: all ${transitionTime}ms ease-in;

  ${({ theme }) => {
    if (theme.type === Theme.Light) {
      return `
        transform: translateX(${sideOffset}px);
        background: radial-gradient(farthest-corner at 66% 33%, ${theme.primary} 0%, ${theme.secondary} 70%);
      `
    } else {
      return `
        transform: translateX(${width - circleSize - sideOffset}px);
        background: radial-gradient(farthest-corner at 66% 33%, #F7F7F7 0%, #888888 70%);
        &::after {
          content: " ";
          width: 7px;
          height: 5px;
          border-radius: 100%;
          background: radial-gradient(farthest-corner at 33% 80%, #F7F7F7 0%, #888888 100%);
          transform: translate(4px, -4px) rotate(45deg);
        }
      `
    }
  }};
`

type ThemeSwitcherProps = {
  onChange: () => void
}

const ThemeSwitcher = ({ onChange }: ThemeSwitcherProps) => {
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // If 'Enter" or 'Space' are pressed on the keyboard
    (e.which === 13 || e.which === 32) && onChange()
  }

  return (
    <Wrapper
      onClick={onChange}
      role="button"
      tabIndex={0}
      onKeyPress={handleKeyPress}
    >
      <StyledThemeSwitch>
        <Stars>
          <Star index={1} size={2} x={15} y={4} />
          <Star index={2} size={1} x={5} y={8} />
          <Star index={3} size={1} x={12} y={16} />
        </Stars>
        <Circle />
      </StyledThemeSwitch>
    </Wrapper>
  )
}

export default ThemeSwitcher
