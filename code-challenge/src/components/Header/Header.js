import React, { PropTypes } from 'react'

import './Header.css'

const Header = ({ title }) => (
    <div className="header">
        <h2>{title}</h2>
    </div>
)

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
