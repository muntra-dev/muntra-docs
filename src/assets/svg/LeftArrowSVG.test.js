import React from 'react';
import { render, screen } from '@testing-library/react';
import LeftArrowSVG from './LeftArrowSVG';

describe('LeftArrowSVG', () => {
  it('renders an SVG element', () => {
    render(<LeftArrowSVG />);
    const svg = screen.getByRole('img', { name: 'Go back' });
    expect(svg).toBeInTheDocument();
  });

  it('applies classProp correctly', () => {
    render(<LeftArrowSVG classProp="test-class" />);
    const svg = screen.getByRole('img', { name: 'Go back' });
    expect(svg).toHaveClass('LeftArrowSVG');
    expect(svg).toHaveClass('test-class');
  });

  it('renders without classProp', () => {
    render(<LeftArrowSVG />);
    const svg = screen.getByRole('img', { name: 'Go back' });
    expect(svg).toHaveClass('LeftArrowSVG');
  });

  it('renders with correct dimensions', () => {
    render(<LeftArrowSVG />);
    const svg = screen.getByRole('img', { name: 'Go back' });
    expect(svg).toHaveAttribute('width', '400.004');
    expect(svg).toHaveAttribute('height', '400.004');
  });

  it('renders with correct viewBox', () => {
    render(<LeftArrowSVG />);
    const svg = screen.getByRole('img', { name: 'Go back' });
    expect(svg).toHaveAttribute('viewBox', '0 0 400.004 400.004');
  });

  it('contains a path element', () => {
    render(<LeftArrowSVG />);
    const svg = screen.getByRole('img', { name: 'Go back' });
    // eslint-disable-next-line testing-library/no-node-access
    const path = svg.querySelector('path');
    expect(path).toBeInTheDocument();
  });
});
