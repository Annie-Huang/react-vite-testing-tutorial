import { renderHook } from '@testing-library/react';
import { useCounter } from './useCounter.js';

describe('useCounter', () => {
  it('initial value is 5', () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });
});
