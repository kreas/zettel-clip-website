import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MethodGrid } from './method-grid';

describe('MethodGrid', () => {
  it('renders the section eyebrow', () => {
    render(<MethodGrid />);
    expect(screen.getByText(/The Method — 01\/03/)).toBeInTheDocument();
  });

  it('renders all six method cells as headings', () => {
    render(<MethodGrid />);
    const titles = [
      'One hotkey, anywhere',
      'Just markdown',
      'A wiki, not a pile',
      'Built-in MCP server',
      'Ask your notes',
      'Native and quiet',
    ];
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title, level: 3 })).toBeInTheDocument();
    }
  });

  it('renders brass numbering for each cell', () => {
    render(<MethodGrid />);
    expect(screen.getByText('#1 Capture')).toBeInTheDocument();
    expect(screen.getByText('#6 Slim')).toBeInTheDocument();
  });

  it('renders all cells uniform with hover inversion', () => {
    const { container } = render(<MethodGrid />);
    expect(container.querySelectorAll('.bg-ink-band')).toHaveLength(0);
    const cells = container.querySelectorAll('article');
    expect(cells).toHaveLength(6);
    for (const cell of cells) {
      expect(cell.className).toContain('bg-canvas');
      expect(cell.className).toContain('hover:bg-ink-band');
      expect(cell.className).toContain('transition-colors');
    }
  });
});
