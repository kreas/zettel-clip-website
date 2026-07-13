import type { Metadata } from 'next';
import { LandingFooter } from '@/components/landing/landing-footer';
import { LandingNav } from '@/components/landing/landing-nav';

export const metadata: Metadata = {
  title: 'The LLM Wiki - Why Your Knowledge Base Should Compile, Not Retrieve',
  description:
    'Why persistent, AI-maintained knowledge bases outperform retrieval, and why Hemingway makes the pattern real.',
};

export default function EssayLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <LandingNav />
      <main className="flex-grow">
        {/* Article header — ink band with brass eyebrow and serif display title */}
        <section className="bg-ink-band px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow text-brass">Essay &middot; July 2026</p>
            <h1 className="display-mega mt-8 text-4xl text-on-ink sm:text-5xl md:text-[56px]">
              Why Your Notes Die
            </h1>
            <p className="mono-body mt-6 text-on-ink/60">
              And how the LLM Wiki pattern changes that.
            </p>
          </div>
        </section>

        {/* Article body — cream canvas, reading-width container */}
        <article className="mx-auto max-w-3xl px-6 py-24">{children}</article>
      </main>
      <LandingFooter />
    </div>
  );
}