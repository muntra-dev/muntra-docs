import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingWidgetSVG from './BookingWidgetSVG';

describe('BookingWidgetSVG', () => {
  it('renders an SVG element', () => {
    const mockOnClick = jest.fn();
    render(<BookingWidgetSVG onClick={mockOnClick} />);
    const svg = screen.getByRole('button', { name: 'Booking Widget' });
    expect(svg).toBeInTheDocument();
  });

  it('applies classProp correctly', () => {
    const mockOnClick = jest.fn();
    render(<BookingWidgetSVG classProp="test-class" onClick={mockOnClick} />);
    const svg = screen.getByRole('button', { name: 'Booking Widget' });
    expect(svg).toHaveClass('test-class');
  });

  it('calls onClick with true when clicked', () => {
    const mockOnClick = jest.fn();
    render(<BookingWidgetSVG onClick={mockOnClick} />);
    const svg = screen.getByRole('button', { name: 'Booking Widget' });
    fireEvent.click(svg);
    expect(mockOnClick).toHaveBeenCalledWith(true);
  });

  it('has role="button" for accessibility', () => {
    const mockOnClick = jest.fn();
    render(<BookingWidgetSVG onClick={mockOnClick} />);
    const svg = screen.getByRole('button', { name: 'Booking Widget' });
    expect(svg).toHaveAttribute('role', 'button');
  });

  it('renders with correct dimensions', () => {
    const mockOnClick = jest.fn();
    render(<BookingWidgetSVG onClick={mockOnClick} />);
    const svg = screen.getByRole('button', { name: 'Booking Widget' });
    expect(svg).toHaveAttribute('width', '375');
    expect(svg).toHaveAttribute('height', '375');
  });
});
