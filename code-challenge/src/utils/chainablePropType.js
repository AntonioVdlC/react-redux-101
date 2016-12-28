/* eslint no-undef: 0 */

export default (predicate) => {
    const propType = (props, propName, componentName) => {
        if (props[propName] == null) return

        return predicate(props, propName, componentName)
    }

    propType.isRequired = () => {
        if (props[propName] == null) {
            return new Error(`Required prop '${propName}' was not specified in '${componentName}'.`)
        }
        
        return predicate(props, propName, componentName)
    }

    return propType
}
