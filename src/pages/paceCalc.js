import React from 'react'
import { Helmet } from "react-helmet"
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Quick Pace Calc" />
    <Helmet>
          <meta charSet="utf-8" />
          <title>Quick Pace Calc</title>
          <link rel="canonical" href="http://manorllc.com/paceCalc" />
      </Helmet>
    <h1>Quick Pace Calc</h1>
    <p>Quick Pace Calc is an iOS app that allows you to easily convert running times to a variety of formats.</p>
    <p>For example, if you ran 5.3 miles in 46 min and 37 sec, Quick Pace Calc will quickly show you pace in min/mile min/km as well as how long it would take you to compelete common race distances at that pace such as 5k, 10k and more!</p>
    <h2>Screenshots</h2>
      <div style={{maxWidth: `400px`}}>
        <Img aspectRatio={1} fluid={data.screenShot.childImageSharp.fluid}/>
      </div>
    <h2>Links</h2>
    <ul>
      <li>
        <a href="https://github.com/chadheise/pace-calc">Source (GitHub)</a>
      </li>
      <li>
        <a href="https://github.com/chadheise/pace-calc/issues">Support</a>
      </li>
      <li>
        <Link to="/paceCalc/privacyPolicy">Privacy Policy</Link>
      </li>
    </ul>
  </Layout>
)

export default SecondPage

export const query = graphql`
{
  screenShot: file(relativePath: { eq: "pace-calc-screenshot.png"}) {
    name
    relativePath
    extension
    publicURL
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`