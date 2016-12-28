import React from 'react'

import './Intro.css'

const Intro = ({ children }) => (
    <p className="App-intro">
        {children}
    </p>
)

Intro.propTypes = {
    children: React.PropTypes.node
}

export default Intro
