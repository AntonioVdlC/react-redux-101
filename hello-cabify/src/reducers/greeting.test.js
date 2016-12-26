import reducer from './greeting'
import { INPUT_CHANGE } from './../actions/types'

const initialState = { name: '' }

describe('greeting reducer', () => {
    it('returns the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('handles INPUT_CHANGE action', () => {
        const action = {
            type: INPUT_CHANGE, 
            inputText: 'Cabify'
        }
        
        expect(reducer(initialState, action)).toEqual({
            name: action.inputText
        })
    })
})
