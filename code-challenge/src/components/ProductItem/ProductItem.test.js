import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import ProductItem from './ProductItem'

const setup = ({ product }) => {
    const actions = {
        onAddToCartClicked: jest.fn()
    }

    const component = shallow(
        <ProductItem 
            product={product}
            {...actions}
        />
    )

    return {
        actions,
        component,
        p: component.find('p'),
        button: component.find('button')
    }
}

describe('<ProductItem />', () => {
    it('renders without crashing', () => {
        ReactDOM.render(
            <ProductItem
                product={{ name: 'Test', unitPrice: 1 }}
            />,
            document.createElement('div')
        )
    })
    
    it('has the `product-item` class', () => {
        const props = { product: { name: 'Test', unitPrice: 1 } }
        const { component } = setup(props)

        expect(component.prop("className")).toMatch("product-item")
    })

    it('renders a text', () => {
        const props = { product: { name: 'Test', unitPrice: 1 } }
        const { p } = setup(props)

        expect(p).toBeDefined()
        expect(p.text()).toEqual('Test - 1.00€')
    })

    it('renders a button', () => {
        const props = { product: { name: 'Test', unitPrice: 1 } }
        const { button } = setup(props)

        expect(button).toBeDefined()
        expect(button.text()).toEqual('Add To Cart')
    })

    it('calls onAddToCartClicked when clicking button', () =>{
        const props = { product: { name: 'Test', unitPrice: 1 } }
        const { actions, button } = setup(props)

        button.simulate('click')
        expect(actions.onAddToCartClicked).toBeCalled()
    })
})
