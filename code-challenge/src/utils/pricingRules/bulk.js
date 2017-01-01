export default ({ id, unitPrice, bulkNumber, bulkPrice }, cart) => {
    let count = cart.reduce((t, p) => (p.id === id) ? ++t : t, 0)
    return (count < bulkNumber) ? unitPrice : bulkPrice
}
