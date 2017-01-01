import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Cart from './Cart'

const setup = ({ products, total }) => {
    const component = shallow(
        <Cart 
            products={products}
            total={total}
        />
    )

    return {
        component,
        children: component.children(),
        CartItem: component.find('CartItem'),
        CartTotal: component.find('CartTotal'),
    }
}

describe('<Cart />', () => {
    it('renders without crashing', () => {
        ReactDOM.render(
            <Cart
                products={[]}
                total={1}
            />,
            document.createElement('div')
        )
    })
    
    it('has the `cart` class', () => {
        const { component } = setup({ products: [], total: 1 })
        expect(component.prop("className")).toMatch("cart")
    })

    it('renders a text if no products', () => {
        const { component } =  setup({ products: [], total: 1 })

        expect(component.contains(<em>Please add some products to the cart.</em>)).toEqual(true)
    })

    it('renders a list of CartItems if passed products', () => {
        const { CartItem } =  setup({
            products: [{
                name: 'Test',
                unitPrice: 3,
            }],
            total: 1
        })

        expect(CartItem).toBeDefined()
    })

    it('renders a CartTotal if passed a total value', () => {
        const { CartTotal } =  setup({
            products: [{
                name: 'Test',
                unitPrice: 3,
            }],
            total: 1
        })
        
        expect(CartTotal).toBeDefined()
    })
})
