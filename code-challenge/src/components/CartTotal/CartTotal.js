import React, { PropTypes } from 'react'

import formatCurrency from './../../utils/formatCurrency'

import './CartTotal.css'

const CartTotal = ({ total }) => (
    <p className="cart-total">
        Total: {formatCurrency('€', total)}
    </p>
)

CartTotal.propTypes = {
    total: PropTypes.number.isRequired,
}

export default CartTotal
