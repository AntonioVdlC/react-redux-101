import React, { PropTypes } from 'react'

import formatCurrency from './../../utils/formatCurrency'

import './ProductItem.css'

const ProductItem = ({ product, onAddToCartClicked }) => (
    <li className="product-item">
        <p>{product.name} - {formatCurrency('€', product.unitPrice)}</p>
        <button onClick={onAddToCartClicked}>Add To Cart</button>
    </li>
)

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        unitPrice: PropTypes.number.isRequired,
    }).isRequired,
    onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
