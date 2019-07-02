import React, { useState, useCallback } from 'react'
import { Location } from '@reach/router'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import AnchorLink from '../../AnchorLink'
import Headroom from 'react-headroom'

import { config, media } from '../../../globals'
import { Theme } from '../../../globals/theme'
import mixins from '../../../utils/mixins'

import Logo from './Logo'
import ThemeSwitcher from './ThemeSwitcher'

const {fontSizes} = config

const HeaderContainer = styled.header``

const HeadroomContainer = styled(Headroom)`
  .headroom {
    ${mixins.flexBetween}
    flex-direction: row;
    padding: 40px ${config.paddings.horizontalSide}px;
    background: ${props => props.theme.bg};
    z-index: 1000 !important;
    transition: padding ${config.transition};
    ${media.phablet`padding: 20px 20px;`}
    &.headroom--pinned {
      padding: 20px ${config.paddings.horizontalSide}px;
      box-shadow: ${config.shadows.medium};
      ${media.phablet`padding: 20px 20px;`}
    }    
  }
`

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;  
`

const LogoType = styled.h2`
  position: relative;
  display: inline-block;
  font-size: ${fontSizes.nav}px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 0;
  line-height: 1;
  top: 3px;
  ${media.phablet`display: none;`}
`

const NavContainer = styled.nav`
  ${mixins.flexBetween}
  a {
    position: relative;
    margin: 0 20px;
    color: ${props => props.theme.text};
    font-size: ${fontSizes.nav}px;
    font-weight: 600;
    text-decoration: none;
    top: 2px;
    ${media.phablet`margin: 0 14px;`}
    ${media.phone`margin: 0 9px;`}
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
  // Receive default theme state from parent (Layout)
  const [theme, setTheme] = useState(isDark)

  // Toggle theme and check theme type. Pass that to parent.
  const themeMap = useCallback(() => {
    setTheme(!theme)
    theme ? themeSelect(Theme.Light) : themeSelect(Theme.Dark)
  }, [theme])
 
  return (
    <HeaderContainer>
      <HeadroomContainer>
        <LogoContainer>
          <Link to="/">
            <Logo />
            <LogoType>Franklin Farahani.</LogoType>
          </Link>
        </LogoContainer>
        <NavContainer>
          <Location>
            {({ location }) => (
              // if we're on Home page, render an AnchorLink, otherwise a regular Link
              location.pathname === '/' ?
                <AnchorLink href="#work" >
                  Work
                </AnchorLink> :
                <Link to="/#work" partiallyActive={true}>
                  Work
                </Link>
            )}
          </Location>
          <Link to="/blog" activeClassName="active" partiallyActive={true}>
            Blog
          </Link>
          <Location>
            {({ location }) => (
              // if we're on Home page, render an AnchorLink, otherwise a regular Link
              location.pathname === '/' ?
              <AnchorLink href="#contact" >
                Contact
              </AnchorLink> :
              <Link to="/#contact" partiallyActive={true}>
                Contact
              </Link>
            )}
          </Location>
        </NavContainer>
        <ThemeSwitcher onChange={themeMap}/>
      </HeadroomContainer>
    </HeaderContainer>
  )
}

export default Header

