import { MACOS_DMG_URL } from '@/lib/download';

import { Reveal } from './reveal';

export function QuoteCta() {
  return (
    <section className="px-6 py-24">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <blockquote className="display-quote text-ink">
          &ldquo;There is nothing to writing. All you do is sit down and remember.&rdquo;
        </blockquote>
        <p className="eyebrow text-brass">&mdash; The Hemingway Method</p>
        <a
          href={MACOS_DMG_URL}
          className="eyebrow inline-flex h-11 items-center justify-center border-t border-brass bg-ink px-6 text-on-ink transition-colors hover:bg-ink/90"
        >
          Download free for macOS &rarr;
        </a>
      </Reveal>
    </section>
  );
}
