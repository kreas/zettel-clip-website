import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { Reveal } from './reveal';

type IntersectionCallback = (entries: { isIntersecting: boolean }[]) => void;

describe('Reveal', () => {
  let intersect: IntersectionCallback | undefined;
  const observe = vi.fn();
  const disconnect = vi.fn();

  beforeEach(() => {
    intersect = undefined;
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        observe = observe;
        disconnect = disconnect;
        constructor(callback: IntersectionCallback) {
          intersect = callback;
        }
      },
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it('renders its children', () => {
    render(<Reveal>Hidden treasure</Reveal>);
    expect(screen.getByText('Hidden treasure')).toBeInTheDocument();
  });

  it('starts hidden and becomes visible when it intersects', () => {
    const { container } = render(<Reveal>Content</Reveal>);
    const wrapper = container.firstElementChild!;
    expect(wrapper.className).toContain('reveal');
    expect(wrapper.className).not.toContain('is-visible');

    act(() => intersect?.([{ isIntersecting: true }]));
    expect(wrapper.className).toContain('is-visible');
    expect(disconnect).toHaveBeenCalled();
  });

  it('stays hidden while not intersecting', () => {
    const { container } = render(<Reveal>Content</Reveal>);
    act(() => intersect?.([{ isIntersecting: false }]));
    expect(container.firstElementChild!.className).not.toContain('is-visible');
  });

  it('applies a stagger delay', () => {
    const { container } = render(<Reveal delay={150}>Content</Reveal>);
    expect((container.firstElementChild as HTMLElement).style.transitionDelay).toBe('150ms');
  });

  it('is immediately visible when IntersectionObserver is unavailable', () => {
    vi.stubGlobal('IntersectionObserver', undefined);
    const { container } = render(<Reveal>Content</Reveal>);
    expect(container.firstElementChild!.className).toContain('is-visible');
  });
});
