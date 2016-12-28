import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Header from './Header'

const setup = (props) => {
    const component = shallow(<Header {...props} />)

    return {
        component,
        children: component.children(),
        title: component.find('h2')
    }
}

describe('<Header />', () => {
    it('renders without crashing', () => {
        ReactDOM.render(
            <Header/>,
            document.createElement('div')
        )
    })
    
    it('has the `header` class', () => {
        const { component } = setup()
        expect(component.prop("className")).toMatch("header")
    })

    it('renders a title when passed props', () => {
        const { title } = setup({ title: 'Hello, Cabify!' })
        expect(title.text()).toEqual('Hello, Cabify!')
    })
})
