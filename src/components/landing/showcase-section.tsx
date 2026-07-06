import { AppMockup } from './app-mockup';
import { ConstellationEngraving, OpenBookEngraving, PenNibEngraving } from './engravings';
import { Reveal } from './reveal';

import type { ComponentType } from 'react';

const STEPS: {
  number: string;
  title: string;
  body: string;
  engraving: ComponentType<{ className?: string }>;
}[] = [
  {
    number: '01',
    title: 'Capture',
    body: 'One hotkey from any app. Saved instantly, titled by AI in the background.',
    engraving: PenNibEngraving,
  },
  {
    number: '02',
    title: 'Link',
    body: 'Notes reference notes. Spaces keep their own maps of content, automatically.',
    engraving: ConstellationEngraving,
  },
  {
    number: '03',
    title: 'Ask',
    body: 'Point Claude at your vault. It answers from what you\u2019ve written \u2014 grounded, with sources.',
    engraving: OpenBookEngraving,
  },
];

export function ShowcaseSection() {
  return (
    <section id="writing-room">
      {/* Full-bleed ink band with the app mockup */}
      <div className="bg-ink-band px-6 py-24">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 text-center">
          <Reveal>
            <p className="eyebrow text-brass">The Writing Room &mdash; 02/03</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-lg text-on-ink">Every note becomes context</h2>
          </Reveal>
          <Reveal delay={200} className="w-full max-w-4xl">
            <AppMockup />
          </Reveal>
        </div>
      </div>

      {/* Steps row on cream, vertical hairline dividers */}
      <div className="border-b border-hairline px-6 py-24">
        <Reveal>
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 divide-y divide-hairline border-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STEPS.map(({ number, title, body, engraving: Engraving }) => (
              <article
                key={title}
                className="flex flex-col gap-4 px-0 py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0"
              >
                <p className="eyebrow text-brass">{number}</p>
                <h3 className="display-md text-ink">{title}</h3>
                <p className="mono-body text-body">{body}</p>
                <Engraving className="size-16 text-ink" />
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
