import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

const AppIcon = ({fluid, name}) => (
    <>
        <Link style={{textDecoration: `none`}} to="/paceCalc/">
            <div style={{maxWidth: `200px`}}>
                <Img aspectRatio={1} fluid={fluid} style={{borderRadius: `25%`}}/>
            </div>
            <h2 style={{color: `#282828`}}>{name}</h2>
        </Link>
    </>
)

AppIcon.propTypes = {
    fluid: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
}

export default AppIcon