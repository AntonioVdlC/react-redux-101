import React from 'react'

import './Greeting.css'

export default class Greeting extends React.Component {
    render () {
        return (
            <div className="App-greeting">
                <p>
                    {(this.props.name) ? 
                        this.props.greet(this.props.name) : 
                        this.props.emptyText
                    }
                </p>
                <input type="text" onChange={this.props.onChange} />
            </div>
        )
    }
}

Greeting.propTypes = {
    emptyText: React.PropTypes.string.isRequired,
    greet: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
}
