import { connect } from 'react-redux'

import Cart from './../../components/Cart'

const mapStateToProps = (state) => ({
    products: state.cart.products, // TODO - Sort by name
    total: state.cart.total
})

export default connect(
    mapStateToProps
) (Cart)
