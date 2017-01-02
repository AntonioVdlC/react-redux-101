import reducer from './products'
import { RECEIVE_PRODUCTS } from './../actions/types'

const initialState = []

describe('products reducer', () => {
    it('returns the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('handles RECEIVE_PRODUCTS action', () => {
        const action = {
            type: RECEIVE_PRODUCTS, 
            products: [
                { name: 'Test', unitPrice: 3, type: 'unit', id: 1 }
            ]
        }
        
        expect(reducer(initialState, action)).toEqual(action.products)
    })
})
