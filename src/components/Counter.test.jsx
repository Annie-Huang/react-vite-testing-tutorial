import React from 'react';
import Counter from './Counter.jsx';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe('Counter', () => {
  it('increments counter on button click', async () => {
    render(<Counter />);

    const button = screen.getByRole('button', { name: /increment/i });
    const counterValue = screen.getByTestId('counter-value');

    expect(counterValue.textContent).toEqual('0');

    await userEvent.click(button);

    expect(counterValue.textContent).toEqual('1');

    await userEvent.click(button);

    expect(counterValue.textContent).toEqual('2');
  });
});
