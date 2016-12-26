import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Greeting from './Greeting'

const setup = (props) => {
    const actions = {
        onChange: jest.fn()
    }
    const component = shallow(<Greeting {...props} {...actions} />)

    return {
        actions,
        component,
        children: component.children(),
        text: component.find('p'),
        input: component.find('input')
    }
}

describe('<Greeting />', () => {
    it('renders without crashing', () => {
        ReactDOM.render(
            <Greeting/>,
            document.createElement('div')
        )
    })
    
    it('has the `App-greeting` class', () => {
        const { component } = setup()
        expect(component.prop("className")).toMatch("App-greeting")
    })

    it('renders a text', () => {
        const { text } = setup()
        expect(text).toBeDefined()
    })

    it('renders `emptyText` when there is no text to render', () => {
        const { text } = setup({ emptyText: 'Empty Text' })
        expect(text.text()).toEqual('Empty Text')
    })

    it('renders the text when passed in props', () => {
        const { text } = setup({
            emptyText: 'Empty Text', 
            greet: (name) => `Hello, ${name}!`,
            name: 'Antonio' 
        })

        expect(text.text()).toEqual('Hello, Antonio!')
    })

    it('renders an input', () => {
        const { input } = setup()
        expect(input).toBeDefined()
    })

    it('calls onChange action when input changes', () => {
        const { input, actions } = setup()
        input.simulate('change')
        expect(actions.onChange).toBeCalled()
    })
})
