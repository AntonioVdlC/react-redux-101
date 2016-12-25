import {
    INPUT_CHANGE
} from './../actions/types'

export default (state = { name: '' }, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return { name: action.inputText }
        default:
            return state
    }
}
