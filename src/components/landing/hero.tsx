import Image from 'next/image';
import Link from 'next/link';

import { MACOS_DMG_URL } from '@/lib/download';

export function Hero() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-24 md:grid-cols-[3fr_2fr]">
        <div className="flex flex-col items-start gap-8">
          <p className="eyebrow text-brass">Capture &bull; Link &bull; Context</p>
          <h1 className="display-mega text-4xl sm:text-5xl md:text-[72px]">
            Take notes
            <br />
            your AI can read.
          </h1>
          <p className="max-w-xl text-lg text-body">
            Highlight anything, hit the capture hotkey, and it&rsquo;s a markdown note. Hemingway
            grows a linked, plain-text wiki that Claude can search, read, and write &mdash; your
            knowledge becomes your AI&rsquo;s context.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={MACOS_DMG_URL}
              className="eyebrow inline-flex h-11 items-center justify-center border-t border-brass bg-ink px-6 text-on-ink transition-colors hover:bg-ink/90"
            >
              Download for macOS
            </a>
            <Link
              href="#method"
              className="eyebrow inline-flex h-11 items-center px-2 text-ink underline-offset-4 transition-colors hover:text-brass"
            >
              The method &rarr;
            </Link>
          </div>
        </div>

        <Image
          src="/art/mind-engraving.webp"
          alt="Engraving of a classical head in profile with a typewriter, open book, and constellation of linked notes emerging from the mind"
          width={706}
          height={1227}
          priority
          className="mx-auto hidden w-full max-w-sm md:block"
        />
      </div>
    </section>
  );
}
