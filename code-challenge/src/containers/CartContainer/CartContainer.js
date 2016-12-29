import { connect } from 'react-redux'

import Cart from './../../components/Cart'

const byName = (a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0

const mapStateToProps = (state) => ({
    products: state.cart.products.slice().sort(byName),
    total: state.cart.total
})

export default connect(
    mapStateToProps
) (Cart)
