import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Map from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn()
}));

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);

    screen.getByRole('link', {
      name: /a javascript library for interactive maps/i
    });
  });

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Belo Horizonte',
      slug: 'belo-horizonte',
      location: {
        latitude: 0,
        longitude: 0
      }
    };

    const placeTwo = {
      id: '2',
      name: 'São Paulo',
      slug: 'sao-paulo',
      location: {
        latitude: 1,
        longitude: -13
      }
    };
    render(<Map places={[place, placeTwo]} />);

    const saoPauloMarker = screen.getByTitle(/Belo Horizonte/i);

    expect(saoPauloMarker).toBeInTheDocument();
    expect(screen.getByTitle(/São Paulo/i)).toBeInTheDocument();

    userEvent.click(saoPauloMarker);

    expect(useRouter).toHaveBeenCalled();
  });
});
