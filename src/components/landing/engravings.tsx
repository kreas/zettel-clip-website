/**
 * Engraving-style spot illustrations — thin single-weight linework per
 * DESIGN.md "Decorative Depth". Stroke color inherits via currentColor.
 */

type EngravingProps = {
  className?: string;
  title?: string;
};

function base(props: EngravingProps, fallbackTitle: string) {
  return {
    role: 'img' as const,
    'aria-label': props.title ?? fallbackTitle,
    className: props.className,
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 1,
    viewBox: '0 0 64 64',
  };
}

/** Radiating hairlines used behind several marks. */
function Rays() {
  return (
    <g strokeWidth={0.5} opacity={0.6}>
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 12;
        const x1 = 32 + Math.cos(angle) * 22;
        const y1 = 32 + Math.sin(angle) * 22;
        const x2 = 32 + Math.cos(angle) * 30;
        const y2 = 32 + Math.sin(angle) * 30;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </g>
  );
}

export function TypewriterEngraving(props: EngravingProps) {
  return (
    <svg {...base(props, 'Typewriter engraving')}>
      <Rays />
      <rect x="16" y="30" width="32" height="14" />
      <rect x="20" y="22" width="24" height="8" />
      <line x1="22" y1="34" x2="26" y2="34" />
      <line x1="28" y1="34" x2="32" y2="34" />
      <line x1="34" y1="34" x2="38" y2="34" />
      <line x1="40" y1="34" x2="44" y2="34" />
      <line x1="24" y1="38" x2="40" y2="38" />
      <line x1="24" y1="18" x2="40" y2="18" />
      <line x1="32" y1="18" x2="32" y2="22" />
    </svg>
  );
}

export function MarlinEngraving(props: EngravingProps) {
  return (
    <svg {...base(props, 'Marlin engraving')}>
      <Rays />
      <path d="M14 36 C 22 28, 40 26, 50 34 C 42 40, 24 42, 14 36 Z" />
      <path d="M30 29 L 36 20 L 38 28" />
      <path d="M50 34 L 56 28 M50 34 L 56 40" />
      <line x1="14" y1="36" x2="8" y2="33" />
      <circle cx="44" cy="33" r="0.8" />
    </svg>
  );
}

export function ConstellationEngraving(props: EngravingProps) {
  return (
    <svg {...base(props, 'Linked notes constellation engraving')}>
      <circle cx="20" cy="24" r="2.5" />
      <circle cx="42" cy="18" r="2.5" />
      <circle cx="48" cy="40" r="2.5" />
      <circle cx="28" cy="46" r="2.5" />
      <circle cx="33" cy="32" r="2.5" />
      <line x1="22" y1="25" x2="31" y2="31" strokeWidth={0.6} />
      <line x1="40" y1="19" x2="35" y2="30" strokeWidth={0.6} />
      <line x1="46" y1="38" x2="35" y2="33" strokeWidth={0.6} />
      <line x1="30" y1="44" x2="32" y2="34" strokeWidth={0.6} />
      <line x1="22" y1="26" x2="27" y2="44" strokeWidth={0.6} />
    </svg>
  );
}

export function OpenBookEngraving(props: EngravingProps) {
  return (
    <svg {...base(props, 'Open book engraving')}>
      <Rays />
      <path d="M32 22 C 26 18, 18 18, 14 20 L 14 42 C 18 40, 26 40, 32 44 C 38 40, 46 40, 50 42 L 50 20 C 46 18, 38 18, 32 22 Z" />
      <line x1="32" y1="22" x2="32" y2="44" />
      <line x1="19" y1="25" x2="28" y2="27" strokeWidth={0.6} />
      <line x1="19" y1="29" x2="28" y2="31" strokeWidth={0.6} />
      <line x1="36" y1="27" x2="45" y2="25" strokeWidth={0.6} />
      <line x1="36" y1="31" x2="45" y2="29" strokeWidth={0.6} />
    </svg>
  );
}

export function MagnifierEngraving(props: EngravingProps) {
  return (
    <svg {...base(props, 'Magnifying glass engraving')}>
      <Rays />
      <circle cx="28" cy="28" r="10" />
      <line x1="35" y1="35" x2="46" y2="46" />
      <path d="M22 26 C 23 22, 27 20, 30 21" strokeWidth={0.6} />
    </svg>
  );
}

export function PenNibEngraving(props: EngravingProps) {
  return (
    <svg {...base(props, 'Fountain pen nib engraving')}>
      <Rays />
      <path d="M32 14 C 26 24, 24 34, 28 44 L 32 48 L 36 44 C 40 34, 38 24, 32 14 Z" />
      <line x1="32" y1="24" x2="32" y2="42" />
      <circle cx="32" cy="34" r="2" />
    </svg>
  );
}
