import React from 'react';
import { render, screen } from '@testing-library/react';
import ReferralWidget from './index';

describe('ReferralWidget', () => {
  beforeEach(() => {
    // Clean up any scripts added to document.body
    document.body.innerHTML = '';
  });

  it('renders without crashing', () => {
    render(<ReferralWidget />);
  });

  it('renders main header', () => {
    render(<ReferralWidget />);
    expect(screen.getByText('Muntra Referral Widget Docs')).toBeInTheDocument();
  });

  it('renders Information section', () => {
    render(<ReferralWidget />);
    expect(screen.getByText('Information')).toBeInTheDocument();
  });

  it('renders important whitelist notice', () => {
    render(<ReferralWidget />);
    expect(screen.getByText(/IMPORTANT: MUNTRA PERSONNEL MUST WHITELIST YOUR DOMAIN/)).toBeInTheDocument();
  });

  it('renders Deployment to website section', () => {
    render(<ReferralWidget />);
    expect(screen.getByText('Deployment to website')).toBeInTheDocument();
  });

  it('adds script to document body on mount', () => {
    render(<ReferralWidget />);
    // eslint-disable-next-line testing-library/no-node-access
    const scripts = document.body.querySelectorAll('script');
    const muntraScript = Array.from(scripts).find(
      script => script.src === 'https://muntra-dev.github.io/referral-page/index.js'
    );
    expect(muntraScript).toBeTruthy();
    expect(muntraScript.async).toBe(true);
  });

  it('renders widget placement example section', () => {
    render(<ReferralWidget />);
    expect(screen.getByText('Widget placement example')).toBeInTheDocument();
  });

  it('renders placing a widget heading', () => {
    render(<ReferralWidget />);
    expect(screen.getByText('Placing a widget on a page')).toBeInTheDocument();
  });

  it('renders required attributes section', () => {
    render(<ReferralWidget />);
    expect(screen.getByText('Required attributes:')).toBeInTheDocument();
  });

  it('renders optional attributes section', () => {
    render(<ReferralWidget />);
    expect(screen.getByText('Optional attributes:')).toBeInTheDocument();
  });

  it('renders referral widget div with clinic id', () => {
    render(<ReferralWidget />);
    const widgetDiv = screen.getByTestId('referral-widget');
    expect(widgetDiv).toBeInTheDocument();
    expect(widgetDiv).toHaveAttribute('muntra_clinic_id', '51');
  });

  it('renders with page-body class', () => {
    render(<ReferralWidget />);
    const pageBody = screen.getByTestId('page-body');
    expect(pageBody).toBeInTheDocument();
  });
});
