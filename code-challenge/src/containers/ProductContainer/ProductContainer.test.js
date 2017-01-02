import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { shallow } from 'enzyme'

import ProductContainer from './ProductContainer'
import rootReducer from './../../reducers'

const store = createStore(rootReducer)

const setup = (props) => {
    const component = shallow(
        <Provider store={store}>
            <ProductContainer />
        </Provider>
    )

    return {
        component,
        children: component.children(),
        ProductList: component.find('ProductList'),
    }
}

describe('<ProductContainer />', () => {
    it('renders without crashing', () => {
        ReactDOM.render(
            <Provider store={store}>
                <ProductContainer />
            </Provider>,
            document.createElement('div')
        )
    })

    it('renders a ProductList component', () => {
        const { ProductList } = setup()
        expect(ProductList).toBeDefined()
    })
})
