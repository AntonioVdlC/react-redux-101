import formatCurrency from './formatCurrency'

describe('formatCurrency utils', () => {
    it('is a function', () => {
        expect(typeof formatCurrency).toEqual('function')
    })

    it('returns the value if passed an unrecognized format', () => {
        expect(formatCurrency('H', 3)).toEqual(3)
    })

    it('returns currency formated when passed €', () => {
        expect(formatCurrency('€', 3)).toEqual('3.00€')
    })
})
