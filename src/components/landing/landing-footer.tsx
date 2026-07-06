import Image from 'next/image';
import Link from 'next/link';

const FOOTER_COLUMNS: { header: string; links: { label: string; href: string }[] }[] = [
  {
    header: 'Product',
    links: [
      { label: 'The Method', href: '#method' },
      { label: 'Writing Room', href: '#writing-room' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    header: 'Method',
    links: [
      { label: 'Capture', href: '#method' },
      { label: 'Distill', href: '#method' },
      { label: 'Connect', href: '#method' },
    ],
  },
  {
    header: 'Library',
    links: [
      { label: 'Journal', href: '#' },
      { label: 'Guides', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    header: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
];

export function LandingFooter() {
  return (
    <footer className="overflow-hidden bg-ink-band">
      <div className="mx-auto max-w-[1200px] px-6 pt-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <Image
              src="/art/app-icon.png"
              alt="Hemingway app icon: an engraved statue bust gazing upward on a blue field"
              width={112}
              height={112}
              className="size-24"
            />
            <span className="display-sm text-on-ink">Hemingway</span>
            <span className="mono-body text-on-ink/60">
              &copy; 2026 Hemingway. Written plainly.
            </span>
          </div>
          {FOOTER_COLUMNS.map(({ header, links }) => (
            <nav key={header} className="flex flex-col gap-3" aria-label={header}>
              <p className="eyebrow text-brass">{header}</p>
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="mono-body text-on-ink/70 transition-colors hover:text-on-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
      </div>

      {/* Giant cropped wordmark bleeding off the bottom edge — the brand signature.
          Lives outside the max-width container so it centers on the full-bleed band. */}
      <p
        aria-hidden="true"
        className="-mb-[0.28em] mt-16 select-none whitespace-nowrap text-center font-serif text-[13vw] uppercase leading-none text-on-ink"
      >
        Hemingway
      </p>
    </footer>
  );
}
