import React from 'react'

import isCurrency from './../../utils/isCurrency'

import './CartItem.css'

const CartItem = ({ name, price }) => (
    <p className="cart-item">
        {name} - {price}
    </p>
)

CartItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    price: isCurrency.isRequired
}

export default CartItem
