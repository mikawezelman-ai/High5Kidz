import { useCallback, useEffect, useState } from "react";
import { api } from "../services/api";

export interface ProgressRow {
  id: number;
  user_id: number;
  mission_id: string;
  completed: boolean;
  score: number | null;
  completed_at: string | null;
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressRow[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProgress = useCallback(async () => {
    if (!api.getToken()) {
      setProgress([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const rows = await api.progress();
      setProgress(rows);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const completeMission = useCallback(
    async (missionId: string, score?: number) => {
      const result = await api.completeMission(missionId, score);
      await fetchProgress();
      return result;
    },
    [fetchProgress]
  );

  return { progress, loading, refetch: fetchProgress, completeMission };
}