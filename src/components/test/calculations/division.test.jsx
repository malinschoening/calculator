import { describe, it, expect } from 'vitest';
import { division } from '../../calculations';

describe('division', () => {
    it('Should return the quotient with an integer', () => {
        const x = 5;
        const y = 2;
        const sum = division(x, y)

        expect(sum).toBe(2)
    })

    it('Should return NaN when dividing by zero', () => {
        const x = 5;
        const y = 0;
        const sum = division(x, y);
        
        expect(sum).toBe(NaN)
    })

    it('Should throw error when you try to send NaN', () => {
        const x = 'x'
        const y = 'y'

        expect(() => division(x, y)).toThrowError("We only work with numbers")
    })
})