import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

type NotFoundPageProps = {
  data: {
    site: Site
  }
}

const NotFoundPage = ({data}: NotFoundPageProps) => {
  
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>404: Page Not Found</h1>
      <p>Dang it, you found my heck up 😕.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
