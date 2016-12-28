import { RECEIVE_PRODUCTS } from './../actions/types'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products
        default:
            return state
    }
}
