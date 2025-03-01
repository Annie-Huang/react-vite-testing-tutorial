import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile.jsx';

describe('UserProfile', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('fetches and displays the user data', async () => {
    // eslint-disable-next-line no-undef
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ id: 4, name: 'John', email: 'john@gmail.com' }),
    });
    render(<UserProfile userId={4} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(
    //     screen.getByRole('heading', { name: /john/i }),
    //   ).toBeInTheDocument();
    //   // expect(screen.getByText(/john@gmail.com/i)).toBeInTheDocument();
    // });

    expect(
      await screen.findByRole('heading', { name: /john/i }),
    ).toBeInTheDocument();

    // You just need to await for the first one.
    expect(screen.getByText(/john@gmail.com/i)).toBeInTheDocument();
  });
});
