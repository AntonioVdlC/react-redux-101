import { RECEIVE_PRODUCTS } from './types'
import { receiveProducts } from './receiveProducts'

import _products from './../api/products'

describe('receiveProducts action', () => {
    it('creates an action on products fetch', () => {
        expect(receiveProducts(_products)).toEqual({
            type: RECEIVE_PRODUCTS,
            products: _products
        })
    })
})
