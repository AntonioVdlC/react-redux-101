import { ADD_TO_CART } from './types'

export default (productId) => ({
    type: ADD_TO_CART,
    productId,
})
