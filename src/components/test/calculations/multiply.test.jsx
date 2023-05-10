import { describe, it, expect } from 'vitest';
import { multiply } from '../../calculations';

describe('multiply', () => {
    it('Should return the product', () => {
        const x = 2;
        const y = 5;
        const sum = multiply(x, y)

        expect(sum).toBe(10)
    })

    it('Should throw error when you try to send NaN', () => {
        const x = 'x'
        const y = 'y'

        expect(() => multiply(x, y)).toThrowError("We only work with numbers")
    })
})