import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import { useProgress } from "../hooks/useProgress";

const options = ["4 + 2", "5 + 3", "6 + 4", "7 + 2"];
const correctAnswer = "5 + 3";

export default function Activity() {
  const { activityId } = useParams();
  const navigate = useNavigate();
  const { completeMission } = useProgress();
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [saving, setSaving] = useState(false);

  const isCorrect = selected === correctAnswer;
  const missionId = activityId?.replace(/-\d+$/, "") ?? "hartlandia-1";

  async function handleCheck() {
    setChecked(true);
    if (selected === correctAnswer) {
      setSaving(true);
      try {
        await completeMission(missionId, 100);
      } finally {
        setSaving(false);
      }
    }
  }

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-6">
      <button
        onClick={() => navigate(-1)}
        className="self-start text-sm font-600 text-primary"
      >
        ← Terug
      </button>

      <ProgressBar value={3} max={10} label="Rekenen oefenen" />

      <Card className="flex flex-col gap-4 text-center">
        <h2 className="font-display text-lg text-primary-dark">
          Welke som hoort bij het plaatje?
        </h2>
        <p className="text-2xl">🐚🐚🐚🐚🐚{"\n"}🐚🐚🐚🐚</p>

        <div className="flex flex-col gap-2">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={`rounded-xl border px-4 py-2 text-left font-600 ${
                selected === option
                  ? "border-primary bg-mint-light"
                  : "border-neutral"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {checked && (
          <p
            className={`text-sm font-600 ${
              isCorrect ? "text-success" : "text-cta"
            }`}
          >
            {isCorrect
              ? saving
                ? "Opslaan..."
                : "Goed gedaan! XP toegevoegd 🎉"
              : "💡 Tip: tel eerst de schelpen."}
          </p>
        )}

        <Button
          disabled={!selected}
          onClick={handleCheck}
          className="self-center"
        >
          Controleer →
        </Button>
      </Card>
    </div>
  );
}