import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import AnchorLink from './AnchorLink'
import Headroom from 'react-headroom'

import { config } from '../globals'
import { Theme } from '../globals/theme'
import mixins from '../utils/mixins'

import Logo from './Logo'
import ThemeSwitcher from './ThemeSwitcher'

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

const LogoContainer = styled.div`
  flex: 1;  
`

const NavContainer = styled.nav`
  ${mixins.flexBetween}
  a {
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
      line-height: 1;
      &::after {
        content: " ";
        display: block;
        margin: auto;
        width: 0%;
        bottom: -2px;
        border-bottom: 2px solid rgba(0,0,0,0);
        transition: width ${config.transition};
      }
    }
    &::after {
      content: " ";
      display: block;
      margin: auto;
      width: 0%;
      bottom: -2px;
      border-bottom: 2px solid ${props=>props.theme.primary};
      transition: width ${config.transition};
    }
    &:hover::after,
    &:focus::after {
        width: 100%;
    }
  }
`

type HeaderProps = {
  themeSelect: (theme: Theme) => void
  isDark: boolean
}

const Header = ({ themeSelect, isDark }: HeaderProps) => {
  const [theme, setTheme] = useState(isDark)
  const themeMap = () => {
    setTheme(!theme)
    theme ? themeSelect(Theme.Light) : themeSelect(Theme.Dark)
  }
  return (
    <HeaderContainer>
      <HeadroomContainer>
        <LogoContainer>
          <Link to="/">
            <Logo />
          </Link>
        </LogoContainer>        
        <NavContainer>
          {
            // if we're on Home page, render an AnchorLink, otherwise a regular Link
            window.location.pathname === '/' ?
              <AnchorLink href="#work" >
                Work
              </AnchorLink> :
              <Link to="/#work" partiallyActive={true}>
                Work
              </Link>
          }
          <Link to="/blog" activeClassName="active" partiallyActive={true}>
            Blog
          </Link>
          {
            // if we're on Home page, render an AnchorLink, otherwise a regular Link
            window.location.pathname === '/' ?
              <AnchorLink href="#contact" >
                Contact
              </AnchorLink> :
              <Link to="/#contact" partiallyActive={true}>
                Contact
              </Link>
          }
        </NavContainer>
        <ThemeSwitcher onChange={() => themeMap()}/>
      </HeadroomContainer>
    </HeaderContainer>
  )
}

export default Header

