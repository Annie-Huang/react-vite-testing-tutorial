import { act, renderHook } from '@testing-library/react';
import { useCounter } from './useCounter.js';

describe('useCounter', () => {
  it('initial value is 5', () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });

  it('increment', () => {
    const { result } = renderHook(() => useCounter(0));
    expect(result.current.count).toBe(0);

    // https://testing-library.com/docs/react-testing-library/api/#act
    // https://react.dev/reference/react/act
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
  });
});
