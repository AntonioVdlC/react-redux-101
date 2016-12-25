import React from 'react'

import Logo from './../Logo'

import './Header.css'

const Header = ({
    logo,
    title
}) => (
    <div className="App-header">
        <Logo {...logo} className="App-logo" />
        <h2>{title}</h2>
    </div>
)

Header.propTypes = {
    logo: React.PropTypes.shape({
        src: React.PropTypes.string.isRequired,
        alt: React.PropTypes.string.isRequired,
    }),
    title: React.PropTypes.string.isRequired
}

export default Header
