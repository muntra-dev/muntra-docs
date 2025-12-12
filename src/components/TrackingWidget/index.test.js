import React from 'react';
import { render, screen } from '@testing-library/react';
import TrackingWidget from './index';

describe('TrackingWidget', () => {
  beforeEach(() => {
    // Clean up any scripts added to document.body
    document.body.innerHTML = '';
  });

  it('renders without crashing', () => {
    render(<TrackingWidget />);
  });

  it('renders main header', () => {
    render(<TrackingWidget />);
    expect(screen.getByText('Muntra Pixel Docs')).toBeInTheDocument();
  });

  it('renders Information section', () => {
    render(<TrackingWidget />);
    expect(screen.getByText('Information')).toBeInTheDocument();
  });

  it('renders description about Muntra pixel', () => {
    render(<TrackingWidget />);
    expect(screen.getByText(/The Muntra pixel is a piece of code/)).toBeInTheDocument();
  });

  it('renders Tracking Widget heading', () => {
    render(<TrackingWidget />);
    expect(screen.getByText('Tracking Widget')).toBeInTheDocument();
  });

  it('renders Deployment to website section', () => {
    render(<TrackingWidget />);
    expect(screen.getByText('Deployment to website')).toBeInTheDocument();
  });

  it('adds script to document body on mount', () => {
    render(<TrackingWidget />);
    const scripts = document.body.querySelectorAll('script');
    const muntraScript = Array.from(scripts).find(
      script => script.src === 'https://muntra-dev.github.io/index.js'
    );
    expect(muntraScript).toBeTruthy();
    expect(muntraScript.async).toBe(true);
  });

  it('renders Troubleshooting section', () => {
    render(<TrackingWidget />);
    expect(screen.getByText('Troubleshooting')).toBeInTheDocument();
  });

  it('renders Checklist section', () => {
    render(<TrackingWidget />);
    expect(screen.getByText('Checklist')).toBeInTheDocument();
  });

  it('renders Checking whitelisting section', () => {
    render(<TrackingWidget />);
    expect(screen.getByText('Checking whitelisting')).toBeInTheDocument();
  });

  it('renders pixel_id code element', () => {
    render(<TrackingWidget />);
    const pixelIdElements = screen.getAllByText('pixel_id');
    expect(pixelIdElements.length).toBeGreaterThan(0);
  });

  it('renders with page-body class', () => {
    const { container } = render(<TrackingWidget />);
    const pageBody = container.querySelector('.page-body');
    expect(pageBody).toBeInTheDocument();
  });

  it('renders deployment steps', () => {
    render(<TrackingWidget />);
    expect(screen.getByText(/Get your Muntra Pixel ID/)).toBeInTheDocument();
  });
});
