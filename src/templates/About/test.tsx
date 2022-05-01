import { render, screen } from '@testing-library/react';
import AboutTemplate from '.';

jest.mock('components/LinkWrapper', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock LinkWrapper">{children}</div>;
    }
  };
});

describe('', () => {
  it('should render the template', () => {
    render(<AboutTemplate />);

    expect(screen.getByTestId('Mock LinkWrapper')).toBeInTheDocument();
  });
});
