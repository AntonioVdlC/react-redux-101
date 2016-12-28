import React from 'react'

import './ProductItem.css'

const ProductItem = ({ product, onAddToCartClicker }) => (
    <div className="product-item">
    </div>
)

ProductItem.propTypes = {
    product: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
    }).isRequired,
    onAddToCartClicker: React.PropTypes.func.isRequired
}

export default ProductItem
