export default (currency, value) => {
    switch (currency) {
        case '€':
            return value.toFixed(2) + '€'
        default:
            return value
    }
}
