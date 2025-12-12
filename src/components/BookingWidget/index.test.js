import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingWidget from './index';

describe('BookingWidget', () => {
  beforeEach(() => {
    // Clean up any scripts added to document.body
    document.body.innerHTML = '';
  });

  it('renders without crashing', () => {
    render(<BookingWidget />);
  });

  it('renders main header', () => {
    render(<BookingWidget />);
    expect(screen.getByText('Muntra Booking Widget Docs')).toBeInTheDocument();
  });

  it('renders Information section', () => {
    render(<BookingWidget />);
    expect(screen.getByText('Information')).toBeInTheDocument();
  });

  it('renders important whitelist notice', () => {
    render(<BookingWidget />);
    expect(screen.getByText(/IMPORTANT: MUNTRA PERSONNEL MUST WHITELIST YOUR DOMAIN/)).toBeInTheDocument();
  });

  it('renders Deployment to website section', () => {
    render(<BookingWidget />);
    expect(screen.getByText('Deployment to website')).toBeInTheDocument();
  });

  it('adds script to document body on mount', () => {
    render(<BookingWidget />);
    // eslint-disable-next-line testing-library/no-node-access
    const scripts = document.body.querySelectorAll('script');
    const muntraScript = Array.from(scripts).find(
      script => script.src === 'https://muntra-dev.github.io/index.js'
    );
    expect(muntraScript).toBeTruthy();
    expect(muntraScript.async).toBe(true);
  });

  it('renders example for all caregivers at clinic', () => {
    render(<BookingWidget />);
    expect(screen.getByText('All caregivers at clinic')).toBeInTheDocument();
  });

  it('renders example for specific caregiver', () => {
    render(<BookingWidget />);
    expect(screen.getByText('Specific caregiver')).toBeInTheDocument();
  });

  it('renders widget divs with muntra_clinic_id', () => {
    render(<BookingWidget />);
    const pageBody = screen.getByTestId('page-body');
    // eslint-disable-next-line testing-library/no-node-access
    const widgetDivs = pageBody.querySelectorAll('[muntra_clinic_id]');
    expect(widgetDivs.length).toBeGreaterThan(0);
  });

  it('renders with page-body class', () => {
    render(<BookingWidget />);
    const pageBody = screen.getByTestId('page-body');
    expect(pageBody).toBeInTheDocument();
  });

  it('renders without caregivers example', () => {
    render(<BookingWidget />);
    expect(screen.getByText('Without caregivers at clinic')).toBeInTheDocument();
  });
});
