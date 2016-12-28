import React, { Component } from 'react'

import Cart from './components/Cart'
import Header from './components/Header'
import Intro from './components/Intro'
import ProductList from './components/ProductList'

import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header
                    title="Cabify Checkout"
                />
                <Intro>
                    You can add products to your cart and see your receipt update in real time thanks to the magic of React and Redux!
                </Intro>
                <ProductList />
                <Cart />
            </div>
        )
    }
}

export default App
