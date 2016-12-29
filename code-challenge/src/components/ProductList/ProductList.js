import React from 'react'

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
    products: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        unitPrice: React.PropTypes.number.isRequired,
    })).isRequired,
    addToCart: React.PropTypes.func.isRequired,
}

export default ProductList
