import { ADD_TO_CART } from './types'

export default (product) => ({
    type: ADD_TO_CART,
    product,
})
