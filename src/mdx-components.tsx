import type { MDXComponents } from 'mdx/types';

/**
 * Ink & Brass MDX component overrides.
 * These map raw HTML elements from compiled MDX onto the
 * Hemingway design system (DESIGN.md tokens via Tailwind utilities).
 *
 * Used by @next/mdx for every .mdx page in the app.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    // Display headings — Bodoni Moda serif, ALL CAPS, weight 400
    h1: (props) => (
      <h1
        className="display-mega mt-16 mb-6 text-4xl leading-[1.05] sm:text-5xl md:text-[72px]"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="display-lg mt-20 mb-6 text-3xl sm:text-4xl"
        {...props}
      />
    ),
    h3: (props) => (
      <h3 className="display-md mt-12 mb-4 text-2xl" {...props} />
    ),
    h4: (props) => (
      <h4 className="display-sm mt-8 mb-3 text-xl" {...props} />
    ),

    // Body — CursorGothic sans, 16px, relaxed leading
    p: (props) => (
      <p
        className="text-lg leading-relaxed text-body mb-6"
        {...props}
      />
    ),

    // Inline emphasis
    strong: (props) => (
      <strong className="font-bold text-ink" {...props} />
    ),
    em: (props) => (
      <em className="italic text-body" {...props} />
    ),

    // Links — brass hover on ink text; external links open in new tab
    a: ({ href, ...props }) => {
      const isExternal = href?.startsWith('http');
      return (
        <a
          href={href}
          className="text-ink underline underline-offset-4 transition-colors hover:text-brass"
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...props}
        />
      );
    },

    // Blockquote — serif italic pull quote with brass left hairline
    blockquote: (props) => (
      <blockquote
        className="my-10 border-l-2 border-brass pl-6"
        {...props}
      />
    ),

    // Lists
    ul: (props) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-lg text-body" {...props} />
    ),
    ol: (props) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-lg text-body" {...props} />
    ),
    li: (props) => <li className="leading-relaxed" {...props} />,

    // Code — JetBrains Mono
    code: (props) => (
      <code
        className="font-mono text-sm bg-canvas-soft px-1.5 py-0.5 text-ink"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="mb-8 overflow-x-auto border border-hairline bg-canvas-soft p-4 font-mono text-sm text-ink"
        {...props}
      />
    ),

    // Horizontal rule — hairline divider
    hr: (props) => (
      <hr className="my-16 border-0 border-t border-hairline" {...props} />
    ),

    // Table — hairline borders, mono headers
    table: (props) => (
      <table
        className="mb-8 w-full border-collapse text-sm"
        {...props}
      />
    ),
    thead: (props) => <thead className="font-mono" {...props} />,
    th: (props) => (
      <th
        className="border border-hairline bg-canvas-soft px-4 py-2 text-left text-ink"
        {...props}
      />
    ),
    td: (props) => (
      <td className="border border-hairline px-4 py-2 text-body" {...props} />
    ),
  };
}
