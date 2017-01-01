import bulk from './bulk'
import unit from './unit'
import xfory from './xfory'

const pricingRules = {
    bulk,
    unit,
    xfory,
}

export const applyPricingRules = (cart) =>
    cart.map((product, index) => ({ ...product,
        unitPrice: pricingRules[product.type](product, cart, index) }
    ))

export default pricingRules
