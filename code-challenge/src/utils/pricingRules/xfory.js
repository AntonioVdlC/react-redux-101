export default ({ id, unitPrice, x, y }, cart, index) => {
    let previousCount = 0
    for (let i = index - 1; i >= 0; i--) {
        if (cart[i].id === id) previousCount ++
    }
    return (previousCount % x < (x - y)) ? unitPrice : 0
}
