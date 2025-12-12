import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TrackingWidgetSVG from './TrackingWidgetSVG';

describe('TrackingWidgetSVG', () => {
  it('renders an SVG element', () => {
    const mockOnClick = jest.fn();
    const { container } = render(<TrackingWidgetSVG onClick={mockOnClick} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('applies classProp correctly', () => {
    const mockOnClick = jest.fn();
    const { container } = render(<TrackingWidgetSVG classProp="test-class" onClick={mockOnClick} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('test-class');
  });

  it('calls onClick with true when clicked', () => {
    const mockOnClick = jest.fn();
    const { container } = render(<TrackingWidgetSVG onClick={mockOnClick} />);
    const svg = container.querySelector('svg');
    fireEvent.click(svg);
    expect(mockOnClick).toHaveBeenCalledWith(true);
  });

  it('has role="button" for accessibility', () => {
    const mockOnClick = jest.fn();
    const { container } = render(<TrackingWidgetSVG onClick={mockOnClick} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('role', 'button');
  });

  it('renders with correct dimensions', () => {
    const mockOnClick = jest.fn();
    const { container } = render(<TrackingWidgetSVG onClick={mockOnClick} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '375');
    expect(svg).toHaveAttribute('height', '375');
  });
});
