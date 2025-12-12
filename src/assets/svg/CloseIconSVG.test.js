import React from 'react';
import { render, screen } from '@testing-library/react';
import CloseIcon from './CloseIconSVG';

describe('CloseIconSVG', () => {
  it('renders an SVG element', () => {
    render(<CloseIcon />);
    const svg = screen.getByRole('img', { name: 'Close' });
    expect(svg).toBeInTheDocument();
  });

  it('has correct viewBox', () => {
    render(<CloseIcon />);
    const svg = screen.getByRole('img', { name: 'Close' });
    expect(svg).toHaveAttribute('viewBox', '0 0 16 16');
  });

  it('contains two line elements for X shape', () => {
    render(<CloseIcon />);
    const svg = screen.getByRole('img', { name: 'Close' });
    // eslint-disable-next-line testing-library/no-node-access
    const lines = svg.querySelectorAll('line');
    expect(lines).toHaveLength(2);
  });

  it('has correct stroke width on lines', () => {
    render(<CloseIcon />);
    const svg = screen.getByRole('img', { name: 'Close' });
    // eslint-disable-next-line testing-library/no-node-access
    const lines = svg.querySelectorAll('line');
    lines.forEach(line => {
      expect(line).toHaveAttribute('stroke-width', '2');
    });
  });
});
