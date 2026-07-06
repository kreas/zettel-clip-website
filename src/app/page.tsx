import { Hero } from '@/components/landing/hero';
import { LandingFooter } from '@/components/landing/landing-footer';
import { LandingNav } from '@/components/landing/landing-nav';
import { MethodGrid } from '@/components/landing/method-grid';
import { QuoteCta } from '@/components/landing/quote-cta';
import { ShowcaseSection } from '@/components/landing/showcase-section';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hemingway — Take notes your AI can read.',
  description:
    'Highlight anything, hit the capture hotkey, and it’s a markdown note. Hemingway grows a linked, plain-text wiki that Claude can search, read, and write — your knowledge becomes your AI’s context.',
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <LandingNav />
      <main className="flex-grow">
        <Hero />
        <MethodGrid />
        <ShowcaseSection />
        <QuoteCta />
      </main>
      <LandingFooter />
    </div>
  );
}
