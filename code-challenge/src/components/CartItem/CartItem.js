import React, { PropTypes } from 'react'

import formatCurrency from './../../utils/formatCurrency'

import './CartItem.css'

const CartItem = ({ name, unitPrice }) => (
    <p className="cart-item">
        {name} - {formatCurrency('€', unitPrice)}
    </p>
)

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
}

export default CartItem
