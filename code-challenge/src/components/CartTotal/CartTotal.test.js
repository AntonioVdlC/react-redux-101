import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import CartTotal from './CartTotal'

const setup = ({ total }) => {
    return shallow(
        <CartTotal total={total} />
    )
}

describe('<CartTotal />', () => {
    it('renders without crashing', () => {
        ReactDOM.render(
            <CartTotal total={3}/>,
            document.createElement('div')
        )
    })
    
    it('has the `cart-total` class', () => {
        const component = setup({ total: 3 })
        expect(component.prop("className")).toMatch("cart-total")
    })

    it('renders the total', () => {
        const component = setup({ total: 3 })
        expect(component.text()).toEqual('Total: 3.00€')
    })
})
