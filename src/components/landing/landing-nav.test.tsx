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
    expect(screen.getByRole('link', { name: 'Method' })).toHaveAttribute('href', '/#method');
    expect(screen.getByRole('link', { name: 'LLM Wiki' })).toHaveAttribute('href', '/llm-wiki');
  });

  it('renders the download CTA pointing at the free DMG', () => {
    render(<LandingNav />);
    expect(screen.getByRole('link', { name: /Download/ })).toHaveAttribute(
      'href',
      'https://download.hemingway.md/hemingway-1.0.2.dmg',
    );
  });
});
