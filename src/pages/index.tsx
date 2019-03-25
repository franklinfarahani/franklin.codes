import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return(
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <h1>Franklin.codes</h1>
          <p>Hi there!</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
        <Link to="/blog/">Go to Blog</Link>
      </Layout>
    )
  }
}

export default IndexPage
