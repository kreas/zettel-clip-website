import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ShowcaseSection } from './showcase-section';

describe('ShowcaseSection', () => {
  it('renders the showcase headline on the ink band', () => {
    render(<ShowcaseSection />);
    expect(
      screen.getByRole('heading', { name: 'Every note becomes context', level: 2 }),
    ).toBeInTheDocument();
  });

  it('renders the app mockup', () => {
    render(<ShowcaseSection />);
    expect(screen.getByRole('img', { name: /writing room/i })).toBeInTheDocument();
  });

  it('renders the three steps in order', () => {
    render(<ShowcaseSection />);
    const steps = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent)
      .filter((text) => ['Capture', 'Link', 'Ask'].includes(text ?? ''));
    expect(steps).toEqual(['Capture', 'Link', 'Ask']);
  });

  it('numbers the steps in brass mono', () => {
    render(<ShowcaseSection />);
    for (const number of ['01', '02', '03']) {
      expect(screen.getByText(number)).toBeInTheDocument();
    }
  });
});
