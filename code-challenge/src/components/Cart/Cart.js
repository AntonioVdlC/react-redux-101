import React from 'react'

import CartItem from './../CartItem'

import isCurrency from './../../utils/isCurrency'

import './Cart.css'

const Cart = ({ products, total }) => {
    const hasProducts = products.length > 0
    const nodes = hasProducts ? (
        products.map((product) =>
            <CartItem
                key={product.id}
                name={product.name}
                price={product.price}
            />
        )
    ) : (
        <em>Please add some products to the cart.</em>
    )

    return (
        <div className="cart">
            <h3>Cart</h3>
            <div>
                {nodes}
            </div>
            <p className="cart-total">
                Total: {total}
            </p>
        </div>
    )
}

Cart.propTypes = {
    products: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        price: isCurrency.isRequired,
    })).isRequired,
    total: isCurrency.isRequired,
}

export default Cart
