import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders Muntra logo', () => {
    render(<App />);
    const logo = screen.getByAltText('Muntra Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders Help button', () => {
    render(<App />);
    const helpButton = screen.getByText('Help');
    expect(helpButton).toBeInTheDocument();
  });

  it('renders Muntra Pixel button', () => {
    render(<App />);
    const pixelButton = screen.getByText('Muntra Pixel');
    expect(pixelButton).toBeInTheDocument();
  });

  it('renders Booking Widget button', () => {
    render(<App />);
    const bookingButton = screen.getByText('Booking Widget');
    expect(bookingButton).toBeInTheDocument();
  });

  it('renders Referral Widget button', () => {
    render(<App />);
    const referralButton = screen.getByText('Referral Widget');
    expect(referralButton).toBeInTheDocument();
  });

  it('does not show back button on home page', () => {
    const { container } = render(<App />);
    const backButton = container.querySelector('.backButtonContainer');
    expect(backButton).not.toBeInTheDocument();
  });

  it('shows BookingWidget when Booking Widget button is clicked', () => {
    render(<App />);
    const bookingButton = screen.getByText('Booking Widget');
    fireEvent.click(bookingButton);
    expect(screen.getByText('Muntra Booking Widget Docs')).toBeInTheDocument();
  });

  it('shows back button when navigating to BookingWidget', () => {
    const { container } = render(<App />);
    const bookingButton = screen.getByText('Booking Widget');
    fireEvent.click(bookingButton);
    const backButton = container.querySelector('.backButtonContainer');
    expect(backButton).toBeInTheDocument();
  });

  it('shows TrackingWidget when Muntra Pixel button is clicked', () => {
    render(<App />);
    const pixelButton = screen.getByText('Muntra Pixel');
    fireEvent.click(pixelButton);
    expect(screen.getByText('Muntra Pixel Docs')).toBeInTheDocument();
  });

  it('shows ReferralWidget when Referral Widget button is clicked', () => {
    render(<App />);
    const referralButton = screen.getByText('Referral Widget');
    fireEvent.click(referralButton);
    expect(screen.getByText('Muntra Referral Widget Docs')).toBeInTheDocument();
  });

  it('returns to home page when back button is clicked', () => {
    const { container } = render(<App />);
    const bookingButton = screen.getByText('Booking Widget');
    fireEvent.click(bookingButton);

    const backButton = container.querySelector('.backButtonContainer');
    fireEvent.click(backButton);

    expect(screen.getByText('Muntra Pixel')).toBeInTheDocument();
    expect(screen.queryByText('Muntra Booking Widget Docs')).not.toBeInTheDocument();
  });

  it('toggles help menu when Help button is clicked', () => {
    const { container } = render(<App />);
    const helpButton = screen.getByText('Help');

    // Initially help menu should be closed
    let helpMenu = container.querySelector('.HelpMenuContainer');
    expect(helpMenu).not.toHaveClass('HelpMenuContainerOpen');

    // Click to open
    fireEvent.click(helpButton);
    helpMenu = container.querySelector('.HelpMenuContainer');
    expect(helpMenu).toHaveClass('HelpMenuContainerOpen');

    // Click to close
    fireEvent.click(helpButton);
    helpMenu = container.querySelector('.HelpMenuContainer');
    expect(helpMenu).not.toHaveClass('HelpMenuContainerOpen');
  });

  it('navigates via SVG click on BookingWidgetSVG', () => {
    const { container } = render(<App />);
    const svgButtons = container.querySelectorAll('svg[role="button"]');
    // BookingWidgetSVG is the second one (TrackingWidgetSVG, BookingWidgetSVG, ReferralWidgetSVG)
    const bookingSvg = svgButtons[1];
    fireEvent.click(bookingSvg);
    expect(screen.getByText('Muntra Booking Widget Docs')).toBeInTheDocument();
  });

  it('navigates via SVG click on TrackingWidgetSVG', () => {
    const { container } = render(<App />);
    const svgButtons = container.querySelectorAll('svg[role="button"]');
    // TrackingWidgetSVG is the first one
    const trackingSvg = svgButtons[0];
    fireEvent.click(trackingSvg);
    expect(screen.getByText('Muntra Pixel Docs')).toBeInTheDocument();
  });

  it('navigates via SVG click on ReferralWidgetSVG', () => {
    const { container } = render(<App />);
    const svgButtons = container.querySelectorAll('svg[role="button"]');
    // ReferralWidgetSVG is the third one
    const referralSvg = svgButtons[2];
    fireEvent.click(referralSvg);
    expect(screen.getByText('Muntra Referral Widget Docs')).toBeInTheDocument();
  });

  it('hides homepage content when on a widget page', () => {
    render(<App />);
    const bookingButton = screen.getByText('Booking Widget');
    fireEvent.click(bookingButton);

    expect(screen.queryByAltText('Muntra Logo')).not.toBeInTheDocument();
    expect(screen.queryByText('Muntra Pixel')).not.toBeInTheDocument();
  });

  it('has link to muntra website on logo', () => {
    render(<App />);
    const logo = screen.getByAltText('Muntra Logo');
    const link = logo.closest('a');
    expect(link).toHaveAttribute('href', 'https://about.muntra.se');
  });
});
