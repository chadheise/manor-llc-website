import React from 'react'
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'

import AppIcon from '../components/appIcon'
import Layout from '../components/layout'
import SEO from '../components/seo'


const IndexPage = ({ data }) => {
  console.log(data)

  return(
    <Layout>
      <SEO title="Home" keywords={[`manor`, `manor llc`, `pace calc`, 'pace-calc', 'quick-pace-calc']} />
      <Helmet>
          <meta charSet="utf-8" />
          <title>Manor LLC</title>
          <link rel="canonical" href="http://manorllc.com" />
      </Helmet>
      <p>Welcome to the home of Manor LLC software development!</p>
      <p>Checkout one of our projects using the links below.</p>
      <AppIcon fluid={data.paceCalcIcon.childImageSharp.fluid} name="Quick Pace Calc"/>
    </Layout>);
}

export default IndexPage

export const query = graphql`
{
  paceCalcIcon: file(relativePath: { eq: "pace-calc-icon.png"}) {
    name
    relativePath
    extension
    publicURL
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`