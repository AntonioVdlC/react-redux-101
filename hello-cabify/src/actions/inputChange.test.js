import { INPUT_CHANGE } from './types'
import inputChange from './inputChange'

describe('inputChange action', () => {
    it('creates an action on input change', () => {
        expect(inputChange('Hello')).toEqual({
            type: INPUT_CHANGE,
            inputText: 'Hello'
        })
    })
})
