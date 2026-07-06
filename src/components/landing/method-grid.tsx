import {
  ConstellationEngraving,
  MagnifierEngraving,
  MarlinEngraving,
  OpenBookEngraving,
  PenNibEngraving,
  TypewriterEngraving,
} from './engravings';
import { Reveal } from './reveal';

import type { ComponentType } from 'react';

type Method = {
  number: string;
  title: string;
  body: string;
  engraving: ComponentType<{ className?: string }>;
};

const METHODS: Method[] = [
  {
    number: '#1 Capture',
    title: 'One hotkey, anywhere',
    body: 'Highlight text or an image in any app. \u2303\u2318= saves it as a markdown note before the thought fades.',
    engraving: TypewriterEngraving,
  },
  {
    number: '#2 Plain text',
    title: 'Just markdown',
    body: 'A folder of .md files with frontmatter. No database, no lock-in. Yours forever, in any editor.',
    engraving: PenNibEngraving,
  },
  {
    number: '#3 Link',
    title: 'A wiki, not a pile',
    body: 'Wikilinks, backlinks, and auto-maintained maps of content \u2014 the LLM-wiki structure, kept fresh for you.',
    engraving: ConstellationEngraving,
  },
  {
    number: '#4 Context',
    title: 'Built-in MCP server',
    body: 'The app is the server. Claude searches, reads, and relates your notes live \u2014 no plugins, no export step.',
    engraving: OpenBookEngraving,
  },
  {
    number: '#5 Recall',
    title: 'Ask your notes',
    body: 'Hybrid semantic + keyword search, on-device. From \u2318K \u2014 or from your AI\u2019s side of the conversation.',
    engraving: MagnifierEngraving,
  },
  {
    number: '#6 Slim',
    title: 'Native and quiet',
    body: 'A menu bar app, not an electron monolith. Keychain for secrets, offline-safe capture, macOS 15+.',
    engraving: MarlinEngraving,
  },
];

export function MethodGrid() {
  return (
    <section id="method" className="px-6 py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <Reveal>
          <p className="eyebrow text-brass">The Method &mdash; 01/03</p>
        </Reveal>

        {/* Hairline-divided grid: cells share 1px borders, no gaps */}
        <div className="grid grid-cols-1 border-t border-l border-hairline sm:grid-cols-2 lg:grid-cols-3">
          {METHODS.map(({ number, title, body, engraving: Engraving }, index) => (
            <Reveal key={title} delay={(index % 3) * 100}>
              <article className="group flex h-full flex-col gap-4 border-r border-b border-hairline bg-canvas p-8 transition-colors duration-300 hover:bg-ink-band">
                <p className="eyebrow text-brass">{number}</p>
                <h3 className="display-sm text-ink transition-colors duration-300 group-hover:text-on-ink">
                  {title}
                </h3>
                <Engraving className="size-20 text-ink transition-colors duration-300 group-hover:text-on-ink" />
                <p className="mono-body text-body transition-colors duration-300 group-hover:text-on-ink/70">
                  {body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
