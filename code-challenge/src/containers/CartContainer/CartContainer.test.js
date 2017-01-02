import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { shallow } from 'enzyme'

import CartContainer from './CartContainer'
import rootReducer from './../../reducers'

const store = createStore(rootReducer)

const setup = (props) => {
    const component = shallow(
        <Provider store={store}>
            <CartContainer />
        </Provider>
    )

    return {
        component,
        children: component.children(),
        Cart: component.find('Cart'),
    }
}

describe('<CartContainer />', () => {
    it('renders without crashing', () => {
        ReactDOM.render(
            <Provider store={store}>
                <CartContainer />
            </Provider>,
            document.createElement('div')
        )
    })

    it('renders a Cart component', () => {
        const { Cart } = setup()
        expect(Cart).toBeDefined()
    })
})
