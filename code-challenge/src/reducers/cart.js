import { ADD_TO_CART } from './../actions/types'

const initialState = {
    products: [],
    total: 0,
}

const getTotal = (cart) =>
    cart.reduce((total, product) => total + product.unitPrice, 0)

const pricingRules = {
    unit: ({ unitPrice }) => unitPrice,
    bulk: ({ id, unitPrice, bulkNumber, bulkPrice }, cart) => {
        let count = cart.reduce((t, p) => (p.id === id) ? ++t : t, 0)
        return (count < bulkNumber) ? unitPrice : bulkPrice
    },
    xfory: ({ id, unitPrice, x, y }, cart, index) => {
        let previousCount = 0
        for (let i = index - 1; i >= 0; i--) {
            if (cart[i].id === id) previousCount ++
        }
        return (previousCount % x < (x - y)) ? unitPrice : 0
    },
}

const applyPricingRules = (cart) =>
    cart.map((product, index) => ({ ...product,
        unitPrice: pricingRules[product.type](product, cart, index) }
    ))


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
