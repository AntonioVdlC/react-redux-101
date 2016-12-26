import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Logo from './Logo'

const setup = (props) => {
    const component = shallow(<Logo {...props} />)

    return {
        component,
        children: component.children(),
        image: component.find('img'),
    }
}

describe('<Logo />', () => {
    it('renders without crashing', () => {
        ReactDOM.render(
            <Logo/>,
            document.createElement('div')
        )
    })

    it('renders an image when passed props', () => {
        const { image } = setup({ src: 'some/url', alt: 'An Image' })
        expect(image).toBeDefined()
        expect(image.prop('src')).toEqual('some/url')
        expect(image.prop('alt')).toEqual('An Image')
    })
})
