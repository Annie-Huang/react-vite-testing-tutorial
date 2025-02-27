import React from 'react';
import { describe, it, expect } from 'vitest';
import Greeting from './Greeting.jsx';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

describe('Greeting', () => {
  it('renders a default greeting', () => {
    render(<Greeting />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});
