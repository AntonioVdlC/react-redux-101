import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { shallow } from 'enzyme'

import App from './App'
import rootReducer from './reducers'

const store = createStore(rootReducer)

describe('<App />', () => {
    it('renders without crashing', () => {
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>, 
            document.createElement('div')
        )
    })

    it('has the `App` class', () => {
        const component = shallow(<App />)
        expect(component.prop("className")).toMatch("App")
    })
})
