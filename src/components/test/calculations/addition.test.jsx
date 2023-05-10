import { describe, it, expect } from 'vitest';
import { addition } from '../../calculations';

describe('addition', () => {
    it('Should return the sum', () => {
        const x = 5;
        const y = 2;
        const sum = addition(x, y)

        expect(sum).toBe(7);
    })

    it('Should throw error when you try to send NaN', () => {
        const x = 'x'
        const y = 'y'

        expect(() => addition(x, y)).toThrowError("We only work with numbers")
    })
})