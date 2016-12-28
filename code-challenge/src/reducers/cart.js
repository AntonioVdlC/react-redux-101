import { ADD_TO_CART } from './../actions/types'

const initialState = {
    products: [],
    total: '0,00€'
}

function getTotal(cart) {
    return cart.reduce((total, product) => total + product.unitPrice, 0)
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // TODO - Recalculate all the unit prices
            const newCart = [...state.products, action.product]
            return {
                products: newCart,
                total: getTotal(newCart),
            }
        default:
            return state
    }
}
