import { render, screen } from '@testing-library/react';

import Map from '.';

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

    expect(screen.getByTitle(/Belo Horizonte/i)).toBeInTheDocument();
    expect(screen.getByTitle(/São Paulo/i)).toBeInTheDocument();
  });
});
