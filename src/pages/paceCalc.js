import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Quick Pace Calc</h1>
    <p>Quick Pace Calc is an iOS app that allows you to easily convert running times to a variety of formats.</p>
    <p>For example, if you ran 5.3 miles in 46 min and 37 sec, Quick Pace Calc will quickly show you pace in min/mile min/km as well as how long it would take you to compelete common race distances at that pace such as 5k, 10k and more!</p>
    <h2>Links</h2>
    <ul>
      <li>
        <Link to="/paceCalc/privacyPolicy">Privacy Policy</Link>
      </li>
    </ul>
  </Layout>
)

export default SecondPage
