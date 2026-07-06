import Link from 'next/link';

const LEFT_LINKS = [
  { label: 'Library', href: '#method' },
  { label: 'Method', href: '#writing-room' },
];

const RIGHT_LINKS = [{ label: 'Pricing', href: '#pricing' }];

export function LandingNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center px-6">
        <nav className="hidden items-center gap-8 md:flex">
          {LEFT_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="eyebrow text-body transition-colors hover:text-brass"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Empty spacer keeps the wordmark centered on mobile */}
        <div className="md:hidden" />

        {/* Centered serif wordmark */}
        <Link href="/" className="display-sm justify-self-center text-ink">
          Hemingway
        </Link>

        <nav className="flex items-center justify-end gap-8">
          {RIGHT_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="eyebrow hidden text-body transition-colors hover:text-brass md:block"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/signup" className="eyebrow text-ink transition-colors hover:text-brass">
            Join &rarr;
          </Link>
        </nav>
      </div>
    </header>
  );
}
