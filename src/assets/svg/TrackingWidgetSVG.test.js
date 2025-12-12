import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TrackingWidgetSVG from './TrackingWidgetSVG';

describe('TrackingWidgetSVG', () => {
  it('renders an SVG element', () => {
    const mockOnClick = jest.fn();
    render(<TrackingWidgetSVG onClick={mockOnClick} />);
    const svg = screen.getByRole('button', { name: 'Muntra Pixel' });
    expect(svg).toBeInTheDocument();
  });

  it('applies classProp correctly', () => {
    const mockOnClick = jest.fn();
    render(<TrackingWidgetSVG classProp="test-class" onClick={mockOnClick} />);
    const svg = screen.getByRole('button', { name: 'Muntra Pixel' });
    expect(svg).toHaveClass('test-class');
  });

  it('calls onClick with true when clicked', () => {
    const mockOnClick = jest.fn();
    render(<TrackingWidgetSVG onClick={mockOnClick} />);
    const svg = screen.getByRole('button', { name: 'Muntra Pixel' });
    fireEvent.click(svg);
    expect(mockOnClick).toHaveBeenCalledWith(true);
  });

  it('has role="button" for accessibility', () => {
    const mockOnClick = jest.fn();
    render(<TrackingWidgetSVG onClick={mockOnClick} />);
    const svg = screen.getByRole('button', { name: 'Muntra Pixel' });
    expect(svg).toHaveAttribute('role', 'button');
  });

  it('renders with correct dimensions', () => {
    const mockOnClick = jest.fn();
    render(<TrackingWidgetSVG onClick={mockOnClick} />);
    const svg = screen.getByRole('button', { name: 'Muntra Pixel' });
    expect(svg).toHaveAttribute('width', '375');
    expect(svg).toHaveAttribute('height', '375');
  });
});
