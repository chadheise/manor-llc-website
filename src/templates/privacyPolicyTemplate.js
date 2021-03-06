import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <SEO title="Privacy Policy" keywords={[`manor`, `manor llc`, 'privacy', 'policy']} />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`