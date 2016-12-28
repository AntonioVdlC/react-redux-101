import React from 'react'

import isCurrency from './../../utils/isCurrency'

import './ProductItem.css'

const ProductItem = ({ product, onAddToCartClicked }) => (
    <div className="product-item">
        <p>{product.name} - {product.unitPrice}</p>
        <button onClick={onAddToCartClicked}>Add To Cart</button>
    </div>
)

ProductItem.propTypes = {
    product: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        unitPrice: isCurrency.isRequired,
    }).isRequired,
    onAddToCartClicker: React.PropTypes.func.isRequired
}

export default ProductItem
