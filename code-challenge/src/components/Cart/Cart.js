import React, { PropTypes } from 'react'

import CartItem from './../CartItem'
import CartTotal from './../CartTotal'

import './Cart.css'

const Cart = ({ products, total }) => {
    const hasProducts = products.length > 0
    const nodes = hasProducts ? (
        <div>
            {products.map((product, index) =>
                <CartItem
                    key={index}
                    name={product.name}
                    unitPrice={product.unitPrice}
                />
            )}
            <CartTotal total={total} />
        </div>
    ) : (
        <em>Please add some products to the cart.</em>
    )

    return (
        <div className="cart">
            <h3>Cart</h3>
            {nodes}
        </div>
    )
}

Cart.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        unitPrice: PropTypes.number.isRequired,
    })).isRequired,
    total: PropTypes.number.isRequired,
}

export default Cart
