import React from 'react'
import styled from '@emotion/styled'

type LogoProps = {
  color?: string
}

const Svg = styled.svg`
  fill: ${props => props.theme.text};
  width: 30px;
`

const Logo = ({color} : LogoProps) => (
  <Svg fill={color} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
    <rect width="16.67" height="16.67" opacity="0.34"/>
    <rect x="16.67" width="16.67" height="16.67" opacity="0.67"/>
    <rect x="33.33" width="16.67" height="16.67"/>
    <rect y="16.67" width="16.67" height="16.67" opacity="0.67"/>
    <rect x="16.67" y="16.67" width="16.67" height="16.67"/>
    <rect y="33.33" width="16.67" height="16.67"/>
  </Svg>
)

export default Logo