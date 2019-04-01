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
  <Svg color={color} enable-background="new 0 0 50 50" version="1.1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,50V0h50v50H0z M45.27,45.27V4.73h-6.59v11.32H16.05v6.59h22.63v16.05H16.05v6.59H45.27z M11.32,45.27V33.95h22.63v-6.59  H11.32V11.32h22.63V4.73H4.73v40.54H11.32z"/>
  </Svg>
)

export default Logo