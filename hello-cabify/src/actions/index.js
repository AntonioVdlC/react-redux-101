import * as types from './types'

export const inputChange = (text) => {
    return {
        type: types.INPUT_CHANGE,
        inputText: text
    }
}
