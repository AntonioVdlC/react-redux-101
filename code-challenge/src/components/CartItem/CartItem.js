import React from 'react'

import formatCurrency from './../../utils/formatCurrency'

import './CartItem.css'

const CartItem = ({ name, unitPrice }) => (
    <p className="cart-item">
        {name} - {formatCurrency('€', unitPrice)}
    </p>
)

CartItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    unitPrice: React.PropTypes.number.isRequired,
}

export default CartItem
