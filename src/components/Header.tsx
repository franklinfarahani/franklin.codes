import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

import { Theme } from '../globals/theme'
import mixins from '../utils/mixins'

const HeaderContainer = styled.header``

type HeaderProps = {
  readonly title?: string
  themeSelect: (theme: Theme) => void
}

const Header = ({ title, themeSelect }: HeaderProps) => {
  const [theme, setTheme] = useState(false)
  const themeMap = () => {
    setTheme(!theme)
    theme ? themeSelect(Theme.Light) : themeSelect(Theme.Dark)
  }
  return (
    <HeaderContainer>
      <Headroom>
        <Link to="/">{title}</Link>
        <h1>LOGO</h1>
        <input type="checkbox" onChange={() => themeMap()} />
      </Headroom>
    </HeaderContainer>
  )
}

export default Header

