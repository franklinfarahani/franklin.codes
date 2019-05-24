import React, { Fragment } from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'

import { reset, fonts, config, themes } from '../../globals'
import { Theme } from '../../globals/theme'

import Header from './Header'
import Footer from './Footer'
import useLocalStorage from '../../utils/useLocalStorage'

const Content = styled.main`
  padding: 0 60px;
  color: ${props=>props.theme.text};
  background-color: ${props=>props.theme.bg};
  min-height: calc(100vh - 113px - 108.25px);
  z-index:1;
  p a {
    margin-bottom: -2px;
    position: relative;
    &::after {
      content: " ";
      display: block;
      position: absolute;
      right:0;
      left:0;
      bottom: -2px;
      border-bottom: 2px solid ${props=>props.theme.primary};
      transition: ${config.transition};
      z-index:-1;
    }
    &:focus,
    &:hover {
      color: ${props=>props.theme.link};
    }
  }
`

type LayoutProps =  {
  title?: string
  children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  const [isDark, setIsDark] = useLocalStorage('dark-mode-enabled', false)
  
  const theme = isDark ? themes.dark : themes.light

  const changeTheme = (newTheme: Theme) => {
    newTheme === Theme.Light ? setIsDark(false) : setIsDark(true)
  }

  return (    
    <Fragment>      
      <ThemeProvider theme={theme}>
        <Global 
          styles = {css`
            body{
              background-color: ${theme.bg};
              color: ${theme.text};
            }
            ${reset}
            ${fonts}          
          `}
        />
        <Header isDark={isDark} themeSelect={changeTheme}/>
        <Content>{children}</Content>
        <Footer />
      </ThemeProvider>
    </Fragment>
  )
}

export default Layout
