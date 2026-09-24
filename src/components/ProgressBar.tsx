interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
}

export default function ProgressBar({ value, max, label }: ProgressBarProps) {
  const percent = Math.min(100, Math.round((value / max) * 100));

  return (
    <div>
      {label && (
        <div className="mb-1 flex justify-between text-xs font-600 text-body/70">
          <span>{label}</span>
          <span>
            {value} / {max}
          </span>
        </div>
      )}
      <div className="h-3 w-full overflow-hidden rounded-full bg-neutral">
        <div
          className="h-full rounded-full bg-mint transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
