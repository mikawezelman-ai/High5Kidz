import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import { missions } from "../data/missions";

export default function Mission() {
  const { missionId } = useParams();
  const navigate = useNavigate();
  const mission = missions.find((m) => m.id === missionId) ?? missions[0];

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-6">
      <button
        onClick={() => navigate(-1)}
        className="self-start text-sm font-600 text-primary"
      >
        ← Terug
      </button>

      <Card className="text-center">
        <h1 className="mb-2 font-display text-xl text-primary-dark">
          ⭐ Missie: {mission.title}
        </h1>
        <p className="mb-6 text-body/80">{mission.description}</p>
        <Button onClick={() => navigate(`/activity/${mission.id}-1`)}>
          Start avontuur →
        </Button>
      </Card>
    </div>
  );
}
