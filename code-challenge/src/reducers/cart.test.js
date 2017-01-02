import reducer from './cart'
import { ADD_TO_CART } from './../actions/types'

const initialState = {
    products: [],
    total: 0,
}

describe('cart reducer', () => {
    it('returns the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('handles ADD_TO_CART action', () => {
        const action = {
            type: ADD_TO_CART, 
            product: { name: 'Test', unitPrice: 3, type: 'unit', id: 1 }
        }
        
        expect(reducer(initialState, action)).toEqual({
            products: [ action.product ],
            total: 3
        })
    })
})
