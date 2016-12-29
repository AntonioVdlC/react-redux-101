import React, { PropTypes } from 'react'

import ProductItem from './../ProductItem'

import './ProductList.css'

const ProductList = ({ products, addToCart }) => (
    <ul className="product-list">
        {products.map((product) => 
            <ProductItem
                key={product.id}
                product={product}
                onAddToCartClicked={() => addToCart(product)}
            />
        )}
    </ul>
)

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        unitPrice: PropTypes.number.isRequired,
    })).isRequired,
    addToCart: PropTypes.func.isRequired,
}

export default ProductList
