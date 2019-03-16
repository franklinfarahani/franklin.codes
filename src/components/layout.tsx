import React from "react"
import { Link } from "gatsby"

interface Props {
  title: string
}

class Layout extends React.Component<Props> {
  render() {
    const { title, children } = this.props

    return (
      <div>
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
      </div>
    )
  }
}

export default Layout
