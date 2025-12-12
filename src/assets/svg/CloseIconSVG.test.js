import React from 'react';
import { render } from '@testing-library/react';
import CloseIcon from './CloseIconSVG';

describe('CloseIconSVG', () => {
  it('renders an SVG element', () => {
    const { container } = render(<CloseIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders with correct viewBox', () => {
    const { container } = render(<CloseIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 16 16');
  });

  it('renders two line elements for the X shape', () => {
    const { container } = render(<CloseIcon />);
    const lines = container.querySelectorAll('line');
    expect(lines).toHaveLength(2);
  });

  it('renders lines with correct stroke width', () => {
    const { container } = render(<CloseIcon />);
    const lines = container.querySelectorAll('line');
    lines.forEach(line => {
      expect(line).toHaveAttribute('stroke-width', '2');
    });
  });
});
