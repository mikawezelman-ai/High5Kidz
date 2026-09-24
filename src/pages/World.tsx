import { useParams } from "react-router-dom";
import MissionCard from "../components/MissionCard";
import { worlds } from "../data/worlds";
import { missions } from "../data/missions";

export default function World() {
  const { worldId = "hartlandia" } = useParams();
  const world = worlds.find((w) => w.id === worldId) ?? worlds[0];
  const worldMissions = missions.filter((m) => m.worldId === world.id);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <div className="text-center">
        <span className="text-5xl">{world.icon}</span>
        <h1 className="mt-2 font-display text-2xl text-primary-dark">
          Ontdek {world.name}
        </h1>
        <p className="text-body/70">{world.description}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {worldMissions.map((mission) => (
          <MissionCard
            key={mission.id}
            id={mission.id}
            title={mission.title}
            description={mission.description}
            locked={mission.locked}
          />
        ))}
      </div>
    </div>
  );
}
