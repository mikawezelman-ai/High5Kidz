import { useCallback, useEffect, useState } from "react";
import { api } from "../services/api";

interface User {
  id: number;
  username: string;
  email: string;
  level?: number;
  xp?: number;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const loadUser = useCallback(async () => {
    if (!api.getToken()) {
      setUser(null);
      setLoading(false);
      return;
    }
    try {
      const me = await api.me();
      setUser(me);
    } catch {
      api.clearToken();
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const signIn = useCallback(
    async (email: string, password: string) => {
      try {
        const { token, user: newUser } = await api.login(email, password);
        api.setToken(token);
        setUser(newUser);
        return { error: null };
      } catch (err) {
        return { error: (err as Error).message };
      }
    },
    []
  );

  const signUp = useCallback(
    async (email: string, password: string, username: string) => {
      try {
        const { token, user: newUser } = await api.register(
          username,
          email,
          password
        );
        api.setToken(token);
        setUser(newUser);
        return { error: null };
      } catch (err) {
        return { error: (err as Error).message };
      }
    },
    []
  );

  const signOut = useCallback(() => {
    api.clearToken();
    setUser(null);
  }, []);

  return { user, loading, signIn, signUp, signOut };
}