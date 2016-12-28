import _products from './products.json'

export default {
    getProducts: (cb) => setTimeout(() => cb(_products), 300)
}
