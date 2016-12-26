import React, { Component } from 'react'

import Header from './components/Header'
import Intro from './components/Intro'
import GreetingContainer from './containers/GreetingContainer'

import logo from './images/logo.svg'

import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header
                    logo={{ src: logo, alt: "logo" }}
                    title='Welcome to Cabify' 
                />
                <Intro>
                    To get started, edit any <code>src/**/</code> file and save to reload.
                </Intro>
                <GreetingContainer
                    emptyText='Please input a name to greet ...'
                    greet={name => `Hello, ${name}!`}
                />
            </div>
        )
    }
}
