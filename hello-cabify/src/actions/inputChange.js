import { INPUT_CHANGE } from './types'

export default (text) => {
    return {
        type: INPUT_CHANGE,
        inputText: text
    }
}
