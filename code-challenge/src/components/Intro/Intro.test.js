import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Intro from './Intro'

const setup = (children) => {
    return shallow(
        <Intro>
            {children}
        </Intro>
    )
}

describe('<Intro />', () => {
    it('renders without crashing', () => {
        ReactDOM.render(
            <Intro/>,
            document.createElement('div')
        )
    })
    
    it('has the `intro` class', () => {
        const component = setup()
        expect(component.prop("className")).toMatch("intro")
    })

    it('renders its children', () => {
        const component = setup(<p>Hello, Cabify!</p>)
        expect(component.contains(<p>Hello, Cabify!</p>)).toEqual(true)
    })
})
