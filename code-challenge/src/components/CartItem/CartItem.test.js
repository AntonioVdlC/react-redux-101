import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import CartItem from './CartItem'

const setup = ({ name, unitPrice }) => {
    return shallow(
        <CartItem 
            name={name}
            unitPrice={unitPrice}
        />
    )
}

describe('<CartItem />', () => {
    it('renders without crashing', () => {
        ReactDOM.render(
            <CartItem
                name={'Test'}
                unitPrice={1}
            />,
            document.createElement('div')
        )
    })
    
    it('has the `cart-item` class', () => {
        const component = setup({ name: 'Test', unitPrice: 1 })
        expect(component.prop("className")).toMatch("cart-item")
    })

    it('renders the total', () => {
        const component = setup({ name: 'Test', unitPrice: 1 })
        expect(component.text()).toEqual('Test - 1.00€')
    })
})
