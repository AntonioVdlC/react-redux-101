import React from 'react'

import isCurrency from './../../utils/isCurrency'

import './CartItem.css'

const CartItem = ({ name, unitPrice }) => (
    <p className="cart-item">
        {name} - {unitPrice}
    </p>
)

CartItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    unitPrice: isCurrency.isRequired,
}

export default CartItem
