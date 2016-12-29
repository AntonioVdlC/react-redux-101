import React from 'react'

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
            <div>
                {nodes}
            </div>
        </div>
    )
}

Cart.propTypes = {
    products: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        unitPrice: React.PropTypes.number.isRequired,
    })).isRequired,
    total: React.PropTypes.number.isRequired,
}

export default Cart
