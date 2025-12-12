import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HelpMenu from './HelpMenu';

describe('HelpMenu', () => {
  it('renders without crashing', () => {
    const mockHandleClick = jest.fn();
    render(<HelpMenu isOpen={false} handleClick={mockHandleClick} />);
  });

  it('applies closed class when isOpen is false', () => {
    const mockHandleClick = jest.fn();
    render(<HelpMenu isOpen={false} handleClick={mockHandleClick} />);
    const menuContainer = screen.getByRole('dialog', { name: 'Help menu' });
    expect(menuContainer).toBeInTheDocument();
    expect(menuContainer).not.toHaveClass('HelpMenuContainerOpen');
  });

  it('applies open class when isOpen is true', () => {
    const mockHandleClick = jest.fn();
    render(<HelpMenu isOpen={true} handleClick={mockHandleClick} />);
    const menuContainer = screen.getByRole('dialog', { name: 'Help menu' });
    expect(menuContainer).toHaveClass('HelpMenuContainerOpen');
  });

  it('calls handleClick when close icon is clicked', () => {
    const mockHandleClick = jest.fn();
    render(<HelpMenu isOpen={true} handleClick={mockHandleClick} />);
    const closeButton = screen.getByRole('button', { name: 'Close help menu' });
    fireEvent.click(closeButton);
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  it('renders Educational section heading', () => {
    const mockHandleClick = jest.fn();
    render(<HelpMenu isOpen={true} handleClick={mockHandleClick} />);
    expect(screen.getByText('Educational')).toBeInTheDocument();
  });

  it('renders Support section heading', () => {
    const mockHandleClick = jest.fn();
    render(<HelpMenu isOpen={true} handleClick={mockHandleClick} />);
    expect(screen.getByText('Support')).toBeInTheDocument();
  });

  it('renders FreeCodeCamp link with correct href', () => {
    const mockHandleClick = jest.fn();
    render(<HelpMenu isOpen={true} handleClick={mockHandleClick} />);
    const link = screen.getByText('FreeCodeCamp');
    expect(link).toHaveAttribute('href', 'https://www.freecodecamp.org/learn/responsive-web-design/');
  });

  it('renders W3 Schools link with correct href', () => {
    const mockHandleClick = jest.fn();
    render(<HelpMenu isOpen={true} handleClick={mockHandleClick} />);
    const link = screen.getByText('W3 Schools');
    expect(link).toHaveAttribute('href', 'https://www.w3schools.com/css/default.asp');
  });

  it('renders support email link', () => {
    const mockHandleClick = jest.fn();
    render(<HelpMenu isOpen={true} handleClick={mockHandleClick} />);
    const emailLink = screen.getByText(/support@muntra.se/);
    expect(emailLink).toHaveAttribute('href', 'mailto:support@muntra.se');
  });

  it('renders AnyDesk download links', () => {
    const mockHandleClick = jest.fn();
    render(<HelpMenu isOpen={true} handleClick={mockHandleClick} />);
    expect(screen.getByText('Windows')).toHaveAttribute('href', 'https://download.anydesk.com/AnyDesk.exe');
    expect(screen.getByText('Mac')).toHaveAttribute('href', 'https://download.anydesk.com/anydesk.dmg');
  });

  it('renders medical device disclaimer text', () => {
    const mockHandleClick = jest.fn();
    render(<HelpMenu isOpen={true} handleClick={mockHandleClick} />);
    expect(screen.getByText(/Muntra is an approved medical device/)).toBeInTheDocument();
  });

  it('renders CloseIcon component', () => {
    const mockHandleClick = jest.fn();
    render(<HelpMenu isOpen={true} handleClick={mockHandleClick} />);
    const svg = screen.getByRole('img', { name: 'Close' });
    expect(svg).toBeInTheDocument();
  });
});
