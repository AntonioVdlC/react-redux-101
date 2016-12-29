import { connect } from 'react-redux'

import byName from './../../utils/sortByName'

import Cart from './../../components/Cart'

const mapStateToProps = (state) => ({
    products: state.cart.products.slice().sort(byName),
    total: state.cart.total
})

export default connect(
    mapStateToProps
) (Cart)
