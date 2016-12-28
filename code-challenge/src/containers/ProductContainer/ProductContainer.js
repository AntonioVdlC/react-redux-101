import { connect } from 'react-redux'

import { addToCart } from './../../actions'

import ProductList from './../../components/ProductList'

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    addToCart: (productId) => dispatch(addToCart(productId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ProductList)
