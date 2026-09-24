# Wizzkidz World

Responsive webapp/PWA voor kinderen: een interactieve leerwereld met werelden,
missies, activiteiten, XP en badges.

## Stack

React + TypeScript + Vite + Tailwind CSS + React Router + Supabase

## Aan de slag

```bash
npm install
cp .env.example .env   # vul je Supabase URL + anon key in
npm run dev
```

De app draait dan op `http://localhost:5173`.

## Database

Het bestand `supabase-schema.sql` bevat de volledige tabelstructuur
(profiles, worlds, missions, activities, progress, badges, user_badges) met
basis row-level-security policies. Plak dit in de SQL editor van je
Supabase-project om te starten.

## Structuur

```
src/
├── components/   Herbruikbare UI (Button, Card, Badge, ProgressBar, MissionCard, Navbar, Sidebar, BottomNav)
├── pages/        Login, Home, World, Mission, Activity, Profile, Settings
├── layouts/      AppLayout (sidebar op desktop, bottom nav op mobiel)
├── hooks/        useAuth, useProgress
├── services/     supabase.ts (client)
├── data/         worlds.ts, missions.ts (voorbeelddata — later uit Supabase)
└── styles/       globals.css (design tokens als CSS variabelen)
```

## Wat nu al werkt

- Login (UI, nog niet gekoppeld aan Supabase auth)
- Home → wereldkaart met 4 werelden (Hartlandia open, rest locked)
- Hartlandia → 3 voorbeeldmissies
- Missie → activiteit met een meerkeuze-rekenopgave (Hartlandia-stijl)
- Profiel met XP-balk en badges
- Responsive layout: sidebar op desktop, bottom nav op mobiel/tablet

## Volgende stappen

1. `useAuth` koppelen aan `Login.tsx` (signInWithPassword / signUp)
2. `worlds.ts` en `missions.ts` vervangen door Supabase-queries
3. Bij een goed antwoord in `Activity.tsx`: XP toekennen + `progress`-rij wegschrijven
4. Badges automatisch toekennen bij mijlpalen
5. Memoria, Reflectoria en Imperfectionia toevoegen zodra Hartlandia volledig werkt
