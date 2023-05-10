import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'; 
import Calculator from '../Calculator';

describe('Calculator', () => {
    it('Should show five buttons', () => {
        render(<Calculator />)
        const buttons = screen.queryAllByRole('button')
        expect(buttons.length).toBe(5)
    })

    it('Should show two input fields', () => {
        render(<Calculator/>)
        const inputs = screen.queryAllByAltText('input')
        expect(inputs.length).toBe(2)
    })
})