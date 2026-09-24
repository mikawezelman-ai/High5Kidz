import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { worlds } from "../data/worlds";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
      <h1 className="font-display text-3xl text-primary-dark">
        Wizzkidz World
      </h1>
      <p className="text-body/80">
        Kies een wereld en begin je avontuur.
      </p>

      <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
        {worlds.map((world) => (
          <button
            key={world.id}
            onClick={() => navigate(`/world/${world.id}`)}
            disabled={world.isLocked}
            className="flex flex-col items-center gap-2 rounded-2xl border border-neutral bg-white p-4 transition-transform hover:-translate-y-0.5 disabled:opacity-40"
          >
            <span className="text-4xl">{world.icon}</span>
            <span className="text-sm font-600">{world.name}</span>
          </button>
        ))}
      </div>

      <Button onClick={() => navigate("/world/hartlandia")}>
        Verder →
      </Button>
    </div>
  );
}
