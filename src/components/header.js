import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import headerStyles from "../styles/header.module.css"

const Header = ({ siteTitle }) => (
  <div className={headerStyles.titleBar}>
    <div className={headerStyles.content}>
      <h1>
        <Link
          to="/"
          className={headerStyles.title}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
