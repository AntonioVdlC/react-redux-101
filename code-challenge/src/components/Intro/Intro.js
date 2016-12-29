import React, { PropTypes } from 'react'

import './Intro.css'

const Intro = ({ children }) => (
    <p className="App-intro">
        {children}
    </p>
)

Intro.propTypes = {
    children: PropTypes.node
}

export default Intro
