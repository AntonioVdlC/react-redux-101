import { ADD_TO_CART } from './types'
import addToCart from './addToCart'

describe('addToCart action', () => {
    it('creates an action on add to cart', () => {
        const product = {
            name: 'Test',
            unitPrice: 3,
            type: "unit",
            id: 1,
        }

        expect(addToCart(product)).toEqual({
            type: ADD_TO_CART,
            product
        })
    })
})
