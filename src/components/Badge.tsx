interface BadgeProps {
  icon: string;
  label: string;
  earned?: boolean;
}

export default function Badge({ icon, label, earned = true }: BadgeProps) {
  return (
    <div
      className={`flex flex-col items-center gap-1 rounded-xl p-2 text-center ${
        earned ? "opacity-100" : "opacity-30 grayscale"
      }`}
    >
      <span className="text-3xl">{icon}</span>
      <span className="text-xs font-600 text-body/80">{label}</span>
    </div>
  );
}
