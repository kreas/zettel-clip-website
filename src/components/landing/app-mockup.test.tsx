import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppMockup } from './app-mockup';

describe('AppMockup', () => {
  it('is exposed as a single labelled image for assistive tech', () => {
    render(<AppMockup />);
    expect(screen.getByRole('img', { name: /writing room/i })).toBeInTheDocument();
  });

  it('renders the active note title and sidebar file names', () => {
    render(<AppMockup />);
    expect(screen.getByRole('heading', { name: 'On Writing Well' })).toBeInTheDocument();
    expect(screen.getByText('on-writing-well.md')).toBeInTheDocument();
    expect(screen.getByText('iceberg-theory.md')).toBeInTheDocument();
  });

  it('renders wiki-style links to related notes', () => {
    render(<AppMockup />);
    expect(screen.getByText(/\[\[iceberg-theory\]\]/)).toBeInTheDocument();
  });
});
