import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import ProductList from './ProductList'

const setup = ({ products, total }) => {
    const component = shallow(
        <ProductList 
            products={products}
        />
    )

    return {
        component,
        ProductItem: component.find('ProductItem'),
    }
}

describe('<ProductList />', () => {
    it('renders without crashing', () => {
        ReactDOM.render(
            <ProductList
                products={[]}
            />,
            document.createElement('div')
        )
    })
    
    it('has the `product-list` class', () => {
        const { component } = setup({ products: [] })
        expect(component.prop("className")).toMatch("product-list")
    })

    it('renders a list of ProductItems if passed products', () => {
        const { ProductItem } =  setup({
            products: [{
                name: 'Test',
                unitPrice: 3,
            }]
        })

        expect(ProductItem).toBeDefined()
    })
})
