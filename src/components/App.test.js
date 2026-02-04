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
    render(<App />);
    const backButton = screen.queryByRole('button', { name: 'Go back' });
    expect(backButton).not.toBeInTheDocument();
  });

  it('shows BookingWidget when Booking Widget button is clicked', () => {
    render(<App />);
    const bookingButton = screen.getByText('Booking Widget');
    fireEvent.click(bookingButton);
    expect(screen.getByText('Muntra Booking Widget Docs')).toBeInTheDocument();
  });

  it('shows back button when navigating to BookingWidget', () => {
    render(<App />);
    const bookingButton = screen.getByText('Booking Widget');
    fireEvent.click(bookingButton);
    const backButton = screen.getByRole('button', { name: 'Go back' });
    expect(backButton).toBeInTheDocument();
  });

  it('shows ReferralWidget when Referral Widget button is clicked', () => {
    render(<App />);
    const referralButton = screen.getByText('Referral Widget');
    fireEvent.click(referralButton);
    expect(screen.getByText('Muntra Referral Widget Docs')).toBeInTheDocument();
  });

  it('returns to home page when back button is clicked', () => {
    render(<App />);
    const bookingButton = screen.getByText('Booking Widget');
    fireEvent.click(bookingButton);

    const backButton = screen.getByRole('button', { name: 'Go back' });
    fireEvent.click(backButton);

    expect(screen.getByText('Booking Widget')).toBeInTheDocument();
    expect(screen.queryByText('Muntra Booking Widget Docs')).not.toBeInTheDocument();
  });

  it('toggles help menu when Help button is clicked', () => {
    render(<App />);
    const helpButton = screen.getByText('Help');

    // Initially help menu should be closed
    let helpMenu = screen.getByRole('dialog', { name: 'Help menu' });
    expect(helpMenu).not.toHaveClass('HelpMenuContainerOpen');

    // Click to open
    fireEvent.click(helpButton);
    helpMenu = screen.getByRole('dialog', { name: 'Help menu' });
    expect(helpMenu).toHaveClass('HelpMenuContainerOpen');

    // Click to close
    fireEvent.click(helpButton);
    helpMenu = screen.getByRole('dialog', { name: 'Help menu' });
    expect(helpMenu).not.toHaveClass('HelpMenuContainerOpen');
  });

  it('navigates via SVG click on BookingWidgetSVG', () => {
    render(<App />);
    // Get SVG button (first match - the SVG element with role=button)
    const bookingSvg = screen.getAllByRole('button', { name: 'Booking Widget' })[0];
    fireEvent.click(bookingSvg);
    expect(screen.getByText('Muntra Booking Widget Docs')).toBeInTheDocument();
  });

  it('navigates via SVG click on ReferralWidgetSVG', () => {
    render(<App />);
    // Get SVG button (first match - the SVG element with role=button)
    const referralSvg = screen.getAllByRole('button', { name: 'Referral Widget' })[0];
    fireEvent.click(referralSvg);
    expect(screen.getByText('Muntra Referral Widget Docs')).toBeInTheDocument();
  });

  it('hides homepage content when on a widget page', () => {
    render(<App />);
    const bookingButton = screen.getByText('Booking Widget');
    fireEvent.click(bookingButton);

    expect(screen.queryByAltText('Muntra Logo')).not.toBeInTheDocument();
    expect(screen.queryByText('Referral Widget')).not.toBeInTheDocument();
  });

  it('has link to muntra website on logo', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: 'Muntra Logo' });
    expect(link).toHaveAttribute('href', 'https://about.muntra.se');
  });

  it('displays version number on home page', () => {
    render(<App />);
    const versionElement = screen.getByText(/^v\d+\.\d+\.\d+$/);
    expect(versionElement).toBeInTheDocument();
  });

  it('hides version number when on a widget page', () => {
    render(<App />);
    const bookingButton = screen.getByText('Booking Widget');
    fireEvent.click(bookingButton);
    expect(screen.queryByText(/^v\d+\.\d+\.\d+$/)).not.toBeInTheDocument();
  });
});
