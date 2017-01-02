import api from './../api'

import { RECEIVE_PRODUCTS } from './types'

export const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products,
})

export default () => (dispatch) => {
    api.getProducts((products) => {
        dispatch(receiveProducts(products))
    })
}
