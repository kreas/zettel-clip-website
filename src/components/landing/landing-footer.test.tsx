import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LandingFooter } from './landing-footer';

describe('LandingFooter', () => {
  it('renders the brand name and copyright', () => {
    render(<LandingFooter />);
    expect(screen.getAllByText('Hemingway').length).toBeGreaterThan(0);
    expect(screen.getByText(/© 2026 Hemingway/)).toBeInTheDocument();
  });

  it('renders the four link columns', () => {
    render(<LandingFooter />);
    for (const column of ['Product', 'Method', 'Library', 'Company']) {
      expect(screen.getByRole('navigation', { name: column })).toBeInTheDocument();
    }
  });

  it('renders footer links', () => {
    render(<LandingFooter />);
    expect(screen.getByRole('link', { name: 'The Method' })).toHaveAttribute('href', '#method');
    expect(screen.getByRole('link', { name: 'LLM Wiki' })).toHaveAttribute('href', '/llm-wiki');
    expect(screen.getByRole('link', { name: 'Download' })).toHaveAttribute(
      'href',
      'https://download.hemingway.md/hemingway-1.0.0.dmg',
    );
    expect(screen.getByRole('link', { name: 'Privacy' })).toBeInTheDocument();
  });

  it('renders the app icon', () => {
    render(<LandingFooter />);
    expect(screen.getByRole('img', { name: /app icon/i })).toBeInTheDocument();
  });

  it('hides the giant wordmark from assistive tech', () => {
    const { container } = render(<LandingFooter />);
    const wordmark = container.querySelector('[aria-hidden="true"]');
    expect(wordmark).not.toBeNull();
    expect(wordmark).toHaveTextContent('Hemingway');
  });
});
