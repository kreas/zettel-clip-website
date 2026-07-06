import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  ConstellationEngraving,
  MagnifierEngraving,
  MarlinEngraving,
  OpenBookEngraving,
  PenNibEngraving,
  TypewriterEngraving,
} from './engravings';

describe('engravings', () => {
  const cases = [
    ['TypewriterEngraving', TypewriterEngraving, /typewriter/i],
    ['MarlinEngraving', MarlinEngraving, /marlin/i],
    ['ConstellationEngraving', ConstellationEngraving, /constellation/i],
    ['OpenBookEngraving', OpenBookEngraving, /book/i],
    ['MagnifierEngraving', MagnifierEngraving, /magnifying/i],
    ['PenNibEngraving', PenNibEngraving, /nib/i],
  ] as const;

  it.each(cases)('%s renders as a labelled image', (_name, Engraving, label) => {
    render(<Engraving />);
    expect(screen.getByRole('img', { name: label })).toBeInTheDocument();
  });

  it('accepts a custom accessible title', () => {
    render(<TypewriterEngraving title="Custom label" />);
    expect(screen.getByRole('img', { name: 'Custom label' })).toBeInTheDocument();
  });
});
