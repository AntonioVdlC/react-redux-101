import { connect } from 'react-redux'

import { inputChange } from './../../actions'

import Greeting from './../../components/Greeting'

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (e) => dispatch(inputChange(e.target.value))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Greeting)
