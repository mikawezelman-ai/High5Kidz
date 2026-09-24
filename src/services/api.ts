const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

function getToken() {
  return localStorage.getItem("wizzkidz_token");
}

async function request(path: string, options: RequestInit = {}) {
  const token = getToken();

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || "Er ging iets mis.");
  }
  return data;
}

export const api = {
  register: (username: string, email: string, password: string) =>
    request("/auth/register", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
    }),
  login: (email: string, password: string) =>
    request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  me: () => request("/auth/me"),
  worlds: () => request("/worlds"),
  missionsForWorld: (worldId: string) =>
    request(`/worlds/${worldId}/missions`),
  mission: (missionId: string) => request(`/missions/${missionId}`),
  progress: () => request("/progress"),
  completeMission: (missionId: string, score?: number) =>
    request("/progress/complete", {
      method: "POST",
      body: JSON.stringify({ missionId, score }),
    }),
  setToken: (token: string) => localStorage.setItem("wizzkidz_token", token),
  clearToken: () => localStorage.removeItem("wizzkidz_token"),
  getToken,
};