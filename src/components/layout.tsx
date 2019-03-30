import React, { Fragment, useState } from 'react'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { Link } from 'gatsby'

import { reset, fonts, themes } from '../globals'
import { Theme } from '../globals/theme'

import Header from './Header'

type LayoutProps =  {
  title?: string
  children: React.ReactNode
}

const Layout = ({title, children}: LayoutProps) => {
  const [theme, setTheme] = useState(themes.light)

  const changeTheme = (newTheme: Theme) => {
    newTheme === Theme.Light ? setTheme(themes.light) : setTheme(themes.dark)
  }

  

  return (    
    <Fragment>
      <Global 
        styles = {css`
          ${fonts}
          ${reset}
        `}
      />
      <ThemeProvider theme = {theme}>
        <Header themeSelect = {changeTheme}/>
        <main style={{background:theme.bg, color: theme.text}}>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </ThemeProvider>
    </Fragment>
  )
}

export default Layout
