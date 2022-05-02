import { render, screen } from '@testing-library/react';
import Pages from '.';

jest.mock('components/LinkWrapper', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock LinkWrapper">{children}</div>;
    }
  };
});

const props = {
  heading: 'My Trips',
  body: '<p>Hy everyone, this is the wrap of my trips</p>'
};

describe('', () => {
  it('should render the template', () => {
    render(<Pages {...props} />);

    expect(screen.getByTestId('Mock LinkWrapper')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /My Trips/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Hy everyone, this is the wrap of my trips/i)
    ).toBeInTheDocument();
  });
});
