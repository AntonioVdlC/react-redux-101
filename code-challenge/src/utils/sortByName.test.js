import byName from './sortByName'

describe('sortByName utils', () => {
    it('is a function', () => {
        expect(typeof byName).toEqual('function')
    })

    it('sorts an array of objects by the [name] property', () => {
        const unsortedArray = [
            { name: 'B.B. King'},
            { name: 'AC/DC' }
        ]

        expect(unsortedArray.slice().sort(byName)).toEqual([
            { name: 'AC/DC' },
            { name: 'B.B. King'}
        ])
    })
})
