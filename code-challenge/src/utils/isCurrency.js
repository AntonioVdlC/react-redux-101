import chainablePropType from './chainablePropType'

export default chainablePropType((props, propName, componentName) => {
    if(!/^(0|[1-9][0-9]?)[.][0-9]{2}€$/.test(props[propName])) {
        return new Error(`Invalid prop '${propName}' supplied to '${componentName}'. Validation failed.`)
    }
})
