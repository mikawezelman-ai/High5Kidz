import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: koppelen aan services/supabase.ts (signInWithPassword)
    navigate("/home");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <h1 className="mb-1 font-display text-2xl text-primary-dark">
          Wizzkidz World
        </h1>
        <p className="mb-6 text-sm text-body/70">
          Log in en ga verder met je avontuur.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="E-mailadres"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border border-neutral px-4 py-2 outline-none focus:border-primary"
          />
          <input
            type="password"
            placeholder="Wachtwoord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl border border-neutral px-4 py-2 outline-none focus:border-primary"
          />
          <Button type="submit" className="mt-2">
            Inloggen →
          </Button>
        </form>
      </Card>
    </div>
  );
}
