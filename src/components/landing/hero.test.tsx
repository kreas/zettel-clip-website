import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './hero';

describe('Hero', () => {
  it('renders the headline as an h1', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Take notes');
    expect(heading).toHaveTextContent('your AI can read.');
  });

  it('renders the brass eyebrow', () => {
    render(<Hero />);
    expect(screen.getByText(/Capture • Link • Context/)).toBeInTheDocument();
  });

  it('renders both call-to-action links', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: 'Download for macOS' })).toHaveAttribute(
      'href',
      'https://download.hemingway.md/hemingway-1.0.2.dmg',
    );
    expect(screen.getByRole('link', { name: /The method/ })).toHaveAttribute('href', '#method');
  });

  it('renders the mind engraving artwork', () => {
    render(<Hero />);
    expect(screen.getByRole('img', { name: /engraving of a classical head/i })).toBeInTheDocument();
  });
});
