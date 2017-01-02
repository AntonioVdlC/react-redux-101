import unit from './unit'

describe('unit pricing rule', () => {
    it('is a function', () => {
        expect(typeof unit).toEqual('function')
    })

    it('returns the product\'s unit price', () => {
        const product = {
            id: 1,
            name: 'Test',
            unitPrice: 5,
            type: 'unit'
        }

        expect(unit(product)).toEqual(product.unitPrice)
    })
})
