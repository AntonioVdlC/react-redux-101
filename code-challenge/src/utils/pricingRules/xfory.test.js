import xfory from './xfory'

const product =  {
    id: 1,
    name: 'Test',
    unitPrice: 5,
    type: 'xfory',
    x: 2,
    y: 1
}

describe('xfory pricing rule', () => {
    it('is a function', () => {
        expect(typeof xfory).toEqual('function')
    })

    it('returns the unit price when full price', () => {
        const cart = [
            { ...product }
        ]
        const index = cart.length - 1

        expect(xfory(product, cart, index)).toEqual(5)
    })

    it('returns 0 when x products in', () => {
        const cart = [
            { ...product },
            { ...product }
        ]
        const index = cart.length - 1

        expect(xfory(product, cart, index)).toEqual(0)
    })
})
