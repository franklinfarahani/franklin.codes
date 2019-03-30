import React, { Fragment } from 'react'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { Link } from 'gatsby'

import { reset, fonts, themes } from '../globals'

import Header from './Header'

type Props =  {
  title?: string
  children: React.ReactNode
}

class Layout extends React.Component<Props> {
  render() {
    const { title, children } = this.props

    return (
      <Fragment>
        <Global 
          styles = {css`
            ${fonts}
            ${reset}
          `}
        />
        <ThemeProvider theme = {themes.light}>
          <Header>
            <Link to={'/'}>
              <h3>{title}</h3>
            </Link>
          </Header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {' '}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </ThemeProvider>
      </Fragment>
    )
  }
}

export default Layout
