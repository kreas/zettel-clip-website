const SIDEBAR_NOTES = [
  'on-writing-well.md',
  'iceberg-theory.md',
  'morning-pages.md',
  'true-sentences.md',
  'paris-notebooks.md',
];

const GRAPH_NODES = [
  { cx: 30, cy: 26 },
  { cx: 72, cy: 16 },
  { cx: 96, cy: 52 },
  { cx: 48, cy: 70 },
  { cx: 62, cy: 42 },
];

const GRAPH_EDGES = [
  [0, 4],
  [1, 4],
  [2, 4],
  [3, 4],
  [0, 3],
];

/** Static in-page mockup of the Hemingway writing room, per DESIGN.md `app-mockup-card`. */
export function AppMockup() {
  return (
    <div
      className="grid grid-cols-[1fr_2fr] border border-brass bg-canvas-soft text-left sm:grid-cols-[1fr_2.5fr_1.5fr]"
      role="img"
      aria-label="Preview of the Hemingway writing room: note list, editor, and graph of linked notes"
    >
      {/* Sidebar: mono note list */}
      <div className="flex flex-col gap-2 border-r border-hairline p-4">
        <p className="eyebrow text-brass">Notes</p>
        {SIDEBAR_NOTES.map((note, i) => (
          <p key={note} className={`mono-body truncate ${i === 0 ? 'text-ink' : 'text-body/70'}`}>
            {note}
          </p>
        ))}
      </div>

      {/* Editor: serif title over sans body */}
      <div className="flex flex-col gap-3 p-5">
        <h3 className="display-sm text-ink">On Writing Well</h3>
        <p className="text-sm leading-relaxed text-body">
          All you have to do is write one true sentence. Write the truest sentence that you know,
          and then go on from there. The rest of the note connects itself.
        </p>
        <p className="mono-body text-brass">[[iceberg-theory]] [[true-sentences]]</p>
      </div>

      {/* Graph pane: dots + hairline edges */}
      <div className="hidden flex-col gap-2 border-l border-hairline p-4 sm:flex">
        <p className="eyebrow text-brass">Graph</p>
        <svg
          viewBox="0 0 120 90"
          className="w-full text-ink"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          {GRAPH_EDGES.map(([a, b]) => (
            <line
              key={`${a}-${b}`}
              x1={GRAPH_NODES[a].cx}
              y1={GRAPH_NODES[a].cy}
              x2={GRAPH_NODES[b].cx}
              y2={GRAPH_NODES[b].cy}
              strokeWidth={0.5}
            />
          ))}
          {GRAPH_NODES.map(({ cx, cy }, i) => (
            <circle key={i} cx={cx} cy={cy} r={3} fill="currentColor" />
          ))}
        </svg>
      </div>
    </div>
  );
}
