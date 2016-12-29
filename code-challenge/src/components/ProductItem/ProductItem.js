import React from 'react'

import formatCurrency from './../../utils/formatCurrency'

import './ProductItem.css'

const ProductItem = ({ product, onAddToCartClicked }) => (
    <div className="product-item">
        <p>{product.name} - {formatCurrency('€', product.unitPrice)}</p>
        <button onClick={onAddToCartClicked}>Add To Cart</button>
    </div>
)

ProductItem.propTypes = {
    product: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        unitPrice: React.PropTypes.number.isRequired,
    }).isRequired,
    onAddToCartClicked: React.PropTypes.func.isRequired
}

export default ProductItem
