import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { shallow } from 'enzyme'

import GreetingContainer from './GreetingContainer'
import greetingReducer from './../../reducers/greeting'

const store = createStore(greetingReducer)

const setup = (props) => {
    const component = shallow(
        <Provider store={store}>
            <GreetingContainer />
        </Provider>
    )

    return {
        component,
        children: component.children(),
        Greeting: component.find('Greeting'),
    }
}

describe('<GreetingContainer />', () => {
    it('renders without crashing', () => {
        ReactDOM.render(
            <Provider store={store}>
                <GreetingContainer />
            </Provider>,
            document.createElement('div')
        )
    })

    it('renders a Greeting component', () => {
        const { Greeting } = setup()
        expect(Greeting).toBeDefined()
    })
})
