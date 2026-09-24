import Card from "../components/Card";
import Badge from "../components/Badge";
import ProgressBar from "../components/ProgressBar";

const badges = [
  { icon: "⭐", label: "Eerste missie", earned: true },
  { icon: "🧠", label: "Denker", earned: true },
  { icon: "🌱", label: "Groeier", earned: false },
  { icon: "📖", label: "Lezer", earned: false },
];

export default function Profile() {
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-6">
      <Card className="flex items-center gap-4">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mint text-2xl text-white">
          👤
        </span>
        <div>
          <h1 className="font-display text-xl text-primary-dark">
            Jouw profiel
          </h1>
          <p className="text-sm text-body/70">Level 2 · 120 XP</p>
        </div>
      </Card>

      <Card>
        <ProgressBar value={120} max={200} label="Voortgang naar level 3" />
      </Card>

      <Card>
        <h2 className="mb-3 font-display text-lg text-primary-dark">
          Badges
        </h2>
        <div className="grid grid-cols-4 gap-2">
          {badges.map((badge) => (
            <Badge key={badge.label} {...badge} />
          ))}
        </div>
      </Card>
    </div>
  );
}
