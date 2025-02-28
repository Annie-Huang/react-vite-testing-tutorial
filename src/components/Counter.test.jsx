import React from 'react';
import Counter from './Counter.jsx';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Counter', () => {
  it('increments counter on button click', async () => {
    render(<Counter />);

    const button = screen.getByRole('button', { name: /increment/i });
    const counterValue = screen.getByTestId('counter-value');

    expect(counterValue.textContent).toEqual('0');
  });
});
