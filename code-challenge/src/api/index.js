import _products from './products.json'

import byName from './../utils/sortByName'

export default {
    getProducts: (cb) => setTimeout(() => cb(_products.sort(byName)), 300)
}
