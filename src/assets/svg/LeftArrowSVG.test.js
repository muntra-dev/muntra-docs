import React from 'react';
import { render } from '@testing-library/react';
import LeftArrowSVG from './LeftArrowSVG';

describe('LeftArrowSVG', () => {
  it('renders an SVG element', () => {
    const { container } = render(<LeftArrowSVG />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('applies classProp correctly', () => {
    const { container } = render(<LeftArrowSVG classProp="test-class" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('LeftArrowSVG');
    expect(svg).toHaveClass('test-class');
  });

  it('renders without classProp', () => {
    const { container } = render(<LeftArrowSVG />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('LeftArrowSVG');
  });

  it('renders with correct dimensions', () => {
    const { container } = render(<LeftArrowSVG />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '400.004');
    expect(svg).toHaveAttribute('height', '400.004');
  });

  it('renders with correct viewBox', () => {
    const { container } = render(<LeftArrowSVG />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 400.004 400.004');
  });

  it('contains a path element', () => {
    const { container } = render(<LeftArrowSVG />);
    const path = container.querySelector('path');
    expect(path).toBeInTheDocument();
  });
});
