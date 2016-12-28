import { connect } from 'react-redux'

import Cart from './../../components/Cart'

const mapStateToProps = (state) => ({
    products: state.cart.products,
    total: state.cart.total
})

export default connect(
    mapStateToProps
) (Cart)
