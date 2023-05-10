import { describe, it, expect } from 'vitest';
import { subtraction } from '../../calculations';

describe('subtraction', () => {
    it('Should return the differ', () => {
        const x = 4;
        const y = 1;
        const sum = subtraction(x, y)

        expect(sum).toBe(3)
    })

    it('Should throw error when you try to send NaN', () => {
        const x = 'x'
        const y = 'y'

        expect(() => subtraction(x, y)).toThrowError("We only work with numbers")
    })
})