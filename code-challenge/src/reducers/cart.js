import { ADD_TO_CART } from './../actions/types'

import { applyPricingRules } from './../utils/pricingRules'

const initialState = {
    products: [],
    total: 0,
}

const getTotal = (cart) =>
    cart.reduce((total, product) => total + product.unitPrice, 0)

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const products = applyPricingRules([
                ...state.products,
                action.product
            ])

            return {
                products,
                total: getTotal(products),
            }
        default:
            return state
    }
}
