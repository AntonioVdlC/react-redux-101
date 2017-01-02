import bulk from './bulk'

const product = {
    id: 1,
    name: 'Test',
    unitPrice: 5,
    type: 'bulk',
    bulkNumber: 2,
    bulkPrice: 3
}

describe('bulk pricing rule', () => {
    it('is a function', () => {
        expect(typeof bulk).toEqual('function')
    })

    it('returns the unit price of a product if number in cart inferior to bulk number', () => {
        const cart = [
            { ...product }
        ]

        expect(bulk(product, cart)).toEqual(product.unitPrice)
    })

    it('returns the bulk price of a product if number in cart equal to bulk number', () => {
        const cart = [
            { ...product },
            { ...product }
        ]

        expect(bulk(product, cart)).toEqual(product.bulkPrice)
    })

    it('returns the bulk price of a product if number in cart superior to bulk number', () => {
        const cart = [
            { ...product },
            { ...product },
            { ...product }
        ]

        expect(bulk(product, cart)).toEqual(product.bulkPrice)
    })
})
