import React, { Fragment } from "react"
import { globalStyle } from '../globals';
import { Global } from "@emotion/core"
import { Link } from "gatsby"

interface Props {
  title: string
}

class Layout extends React.Component<Props> {
  render() {
    const { title, children } = this.props

    return (
      <Fragment>
        <Global styles={globalStyle} />
        <header>
          <Link to={'/'}>
            <h3>{title}</h3>
          </Link>          
        </header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Fragment>
    )
  }
}

export default Layout
