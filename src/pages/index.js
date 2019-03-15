import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return(
      <div>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <h1>Franklin.codes</h1>
          <p>Hi there!</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        </div>
        <Link to="/blog/">Go to Blog</Link>
      </div>
    )
  }
}

export default IndexPage