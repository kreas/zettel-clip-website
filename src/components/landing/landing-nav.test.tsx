import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LandingNav } from './landing-nav';

describe('LandingNav', () => {
  it('renders the centered Hemingway wordmark linking home', () => {
    render(<LandingNav />);
    expect(screen.getByRole('link', { name: 'Hemingway' })).toHaveAttribute('href', '/');
  });

  it('renders section links', () => {
    render(<LandingNav />);
    expect(screen.getByRole('link', { name: 'Library' })).toHaveAttribute('href', '#method');
    expect(screen.getByRole('link', { name: 'Method' })).toHaveAttribute('href', '#writing-room');
    expect(screen.getByRole('link', { name: 'Pricing' })).toHaveAttribute('href', '#pricing');
  });

  it('renders the join CTA pointing at signup', () => {
    render(<LandingNav />);
    expect(screen.getByRole('link', { name: /Join/ })).toHaveAttribute('href', '/signup');
  });
});
