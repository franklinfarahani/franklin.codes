import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

import { config } from '../globals'
import { Theme } from '../globals/theme'
import mixins from '../utils/mixins'

import Logo from './Logo'

const {fontSizes} = config

const HeaderContainer = styled.header``

const HeadroomContainer = styled(Headroom)`
  .headroom {
    ${mixins.flexBetween}
    flex-direction: row;
    padding: 40px 60px;
    background: ${props => props.theme.bg};
    z-index: 1000 !important;
    transition: padding ${config.transition};
    &.headroom--pinned {
      padding: 20px 60px;
      box-shadow: ${config.shadows.medium};
    }
  }
`

const LogoLink = styled(Link)`
  flex: 1;  
`

const NavContainer = styled.nav`
  ${mixins.flexBetween}

`

const NavLink = styled(Link)`
  position: relative;
  margin: 0 20px;
  padding: 0 5px;
  color: ${props => props.theme.text};
  font-size: ${fontSizes.nav}px;
  font-weight: 600;
  text-decoration: none;
  &.active {
    margin-bottom: -4px;
    border-bottom: 4px solid ${props => props.theme.primary};
  }
  &::after {
    border-bottom: none;
  }
`

type HeaderProps = {
  themeSelect: (theme: Theme) => void
}

const Header = ({ themeSelect }: HeaderProps) => {
  const [theme, setTheme] = useState(false)
  const themeMap = () => {
    setTheme(!theme)
    theme ? themeSelect(Theme.Light) : themeSelect(Theme.Dark)
  }
  return (
    <HeaderContainer>
      <HeadroomContainer>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <NavContainer>
          <NavLink to="/#work" activeClassName="active" partiallyActive={true}>
            Work
          </NavLink>
          <NavLink to="/blog" activeClassName="active" partiallyActive={true}>
            Blog
          </NavLink>
          <NavLink to="#contact" activeClassName="active" partiallyActive={true}>
            Contact
          </NavLink>
        </NavContainer>
        <input type="checkbox" onChange={() => themeMap()} />
      </HeadroomContainer>
    </HeaderContainer>
  )
}

export default Header

