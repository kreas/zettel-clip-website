import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QuoteCta } from './quote-cta';

describe('QuoteCta', () => {
  it('renders the pull quote and attribution', () => {
    render(<QuoteCta />);
    expect(screen.getByText(/There is nothing to writing/)).toBeInTheDocument();
    expect(screen.getByText(/— The Hemingway Method/)).toBeInTheDocument();
  });

  it('renders the CTA link to the free macOS download', () => {
    render(<QuoteCta />);
    expect(screen.getByRole('link', { name: /Download free for macOS/ })).toHaveAttribute(
      'href',
      'https://download.hemingway.md/hemingway-1.0.0.dmg',
    );
  });
});
