import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile.jsx';

describe('UserProfile', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('fetches and displays the user data', async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ id: 4, name: 'John', email: 'john@gmail.com' }),
    });
    render(<UserProfile userId={4} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
