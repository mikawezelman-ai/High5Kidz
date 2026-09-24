import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Button from "./Button";

interface MissionCardProps {
  id: string;
  title: string;
  description: string;
  locked?: boolean;
}

export default function MissionCard({
  id,
  title,
  description,
  locked = false,
}: MissionCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="flex flex-col gap-3">
      <h3 className="font-display text-lg text-primary-dark">
        {locked ? "🔒 " : "⭐ "}
        {title}
      </h3>
      <p className="text-sm text-body/80">{description}</p>
      <Button
        disabled={locked}
        onClick={() => navigate(`/mission/${id}`)}
        className="self-start"
      >
        Start avontuur →
      </Button>
    </Card>
  );
}
