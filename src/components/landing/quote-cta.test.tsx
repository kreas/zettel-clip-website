import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QuoteCta } from './quote-cta';

describe('QuoteCta', () => {
  it('renders the pull quote and attribution', () => {
    render(<QuoteCta />);
    expect(screen.getByText(/There is nothing to writing/)).toBeInTheDocument();
    expect(screen.getByText(/— The Hemingway Method/)).toBeInTheDocument();
  });

  it('renders the CTA link to signup', () => {
    render(<QuoteCta />);
    expect(screen.getByRole('link', { name: /Give your AI a memory/ })).toHaveAttribute(
      'href',
      '/signup',
    );
  });
});
