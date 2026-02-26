// Pen/document pixel icon — 8x8 grid at 2x scale (16x16 viewBox)
interface PixelIconProps {
  size?: number;
  className?: string;
}

const GRID = [
  [0, 1, 1, 1, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0],
];

export function PixelBlogIcon({ size = 16, className = '' }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pixel-icon ${className}`}
      aria-hidden="true"
    >
      {GRID.flatMap((row, r) =>
        row.map((cell, c) =>
          cell ? (
            <rect
              key={`${r}-${c}`}
              x={c * 2}
              y={r * 2}
              width={2}
              height={2}
              fill="currentColor"
            />
          ) : null
        )
      )}
    </svg>
  );
}
